function Avatar(props){
    return(
        <img className="Avatar"
            src={props.user}
            alt={props.user}
        />
    )
}
function UserInfo(props){
    return(
        <div className="UserInfo" style={style}>
            <Avatar user={props.user.avatarUrl}/>
            <div className="UserInfo-name">
            {props.user.name}
            </div>
        </div>
    )
}
function formatDate(date) {
    return date.toLocaleDateString();
  }
function Comment() {    
    const comment = {
        author: {
            avatarUrl: "http://www.biaoqingb.com/uploads/img1/20210625/b92e4a193ce050ae733879e63aec67b8.jpg",
            name: "大頭",
        },
        text: '我頭很大所以常常跌倒造成地震',
        date: new Date(),
    }
    return (
      <div className="Comment">
        <UserInfo user={comment.author}/>
        <div className="Comment-text">
          {comment.text}
        </div>
        <div className="Comment-date">
          {formatDate(comment.date)}
        </div>
      </div>
    );
  }
const style= {
  width: "300px",


}

export default Comment;
