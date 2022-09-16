import "./modal.css";
import { useMutation } from "@apollo/client";
import { ADD_FRIEND } from "../../utils/mutations";
import Auth from "../../utils/auth";

const AddFriend = hobbyFanId => {
  const [addFriend, { error }] = useMutation(ADD_FRIEND);
  if (error) {
    console.log(JSON.stringify(error));
  }
  const userId = Auth.getProfile().data._id;
  console.log(userId);
  const handleClick = async hobbyFanId => {
    try {
      await addFriend({
        variables: { userId: userId, friendId: hobbyFanId.hobbyFanId },
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="friendList">
      <div
        onClick={() => {
          handleClick(hobbyFanId);
        }}
      >
        <div className="sm-btn-delete">Add Friend</div>
      </div>
      <div className="sm-btn-message">Send Message</div>
    </div>
  );
};

export default AddFriend;
