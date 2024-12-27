import GiftManager from "./GiftManager";
import { useState, useEffect } from "react";

export default function GiftListManager({ user }: { user: any }) {
    const [giftLists, setGiftLists] = useState<GiftList[]>([]);
    const [selectedListId, setSelectedListId] = useState<string | null>(null);
    const [gifts, setGifts] = useState<Gift[]>([]);
    const [loading, setLoading] = useState(false);
    var selectedListId = "1";


    const fetchGiftLists = async () => {
      setLoading(true);
      try {
        const response = await getGiftLists(user.username);
        setGiftLists(response.data);
      } catch (error) {
        console.error("Error fetching gift lists:", error);
      } finally {
        setLoading(false);
      }
    };
  
    const fetchGifts = async (listId: string) => {
      setLoading(true);
      try {
        const response = await getGiftList(user.username, listId);
        setGifts(response.data);
      } catch (error) {
        console.error("Error fetching gifts:", error);
      } finally {
        setLoading(false);
      }
    };
  
    const handleAddGift = async () => {
      if (!selectedListId) {
        console.log("No list selected");
        return
      }
      const newGift = {
        name: "New Gift",
        description: "Description of the gift",
        price: 100,
        owner: user.username,
      };
      try {
        await addGift(user.username, selectedListId, newGift);
        fetchGifts(selectedListId);
      } catch (error) {
        console.error("Error adding gift:", error);
      }
    };
  
    const handleDeleteGift = async (giftName: string) => {
      if (!selectedListId) return;
      try {
        await deleteGift(user.username, selectedListId, giftName);
        fetchGifts(selectedListId);
      } catch (error) {
        console.error("Error deleting gift:", error);
      }
    };
  
    useEffect(() => {
      fetchGiftLists();
    }, [user]);
  
    return (
      <div>
        <h2>Your Gift Lists</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {giftLists.map((list) => (
              <li key={list.id}>
                <button onClick={() => setSelectedListId(list.id)}>{list.name}</button>
                <button onClick={() => handleDeleteGift(list.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => handleAddGift()}>Add Gift</button>                    
            {selectedListId && (
            <GiftManager userId={user.username} listId={selectedListId} />
            )}
      </div>
    );
  }
  