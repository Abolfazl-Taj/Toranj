import Data_Comments from "../../Assets/Data/Data_Comments";
import "./Comment.css";
const Comment = () => {
  return (
    <div className="Comments">
      <h1 className="Comments_Header">
        <span>نظرات مشتریان</span>
        <hr />
      </h1>
      <div className="Comments_Cont">
        {Data_Comments.map((item) => {
          return (
            <div className="Comment" key={item.id}>
              <img src={item.pic} alt="author_Photo" />
              <h1 className="Comment_Author">{item.author}</h1>
              <p className="Comment_Desc">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
