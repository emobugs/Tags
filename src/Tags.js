
function Tags (props) {
    
    return(
        <div className="tags">
            {props.tags.map((tag, index) => {
                console.log(tag);
                return <div className="tag" key={index}>#{tag}</div>
              })}
        </div>
    )

}

export default Tags;