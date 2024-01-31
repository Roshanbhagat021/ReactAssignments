function DataDisplay({data}){
    return(
        <>{data.map((item)=>
            <div style={{border:"2px solid black",borderRadius:"10px"}} key={item.id}>
                <h2>ID: {item.id}</h2>
                <h2>Title: {item.title}</h2>
                <h2>Body: {item.body}</h2>

            </div>)}</>
    )
}


export default DataDisplay