function Postitem({post}){

    return(
        <>{post.map((item)=>
            
            <div id="item" style={{borderRadius:"10px",textAlign:"left",padding:"15px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}} key={item.id}>
                {item.id%2==0?(<h2 style={{color:"red"}}>ID: {item.id}</h2>):(<h2 style={{color:"Green"}}>ID: {item.id}</h2>)}
                <h2>Title: {item.title}</h2>
                <h3>Body: {item.body}</h3>
            </div>)}
            </>
    )
}

export default Postitem