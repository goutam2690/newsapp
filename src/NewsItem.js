import React from 'react';

const NewsItem = (props) => {
   
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="col-md-4 card mx-4 mb-3 " style={{ width: "21rem" }}>
                <img src={!imageUrl ? "https://static.toiimg.com/thumb/msid-98045837,width-1070,height-580,imgsize-37800,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    {/* for adding badges */}
                    <div>
                    <span className=" badge rounded-pill bg-danger" style={{display:'flex', position:'absolute',right:'0',justifyContent:'flex-end',top:'0', paddingX:"1em",paddingY:"1em" ,fontSize:"0.9em"}}>                   
                        {source}
                        {/* <span className="visually-hidden">unread messages</span> */}
                    </span> 
                    </div>
                    {/* badge end */}
                    <h5 className="card-title">{title}....</h5>
                    <p className="card-text">{description}....</p>
                    <p className="card-text"><small className="text-danger">By {author} On {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More....</a>

                </div>
            </div>
        )
    
}

export default NewsItem
