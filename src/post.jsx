

export default function Post({post}){
    console.log(post)
    const {title,body} = post
    return(
        <div className="card">
            <h4>Title: <small>{title}</small></h4>
            <p><b>Body:</b> {body}</p>
        </div>
    )
}