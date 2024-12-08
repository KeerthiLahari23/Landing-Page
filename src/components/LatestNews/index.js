import './index.css'

const latestNewsData=[
    {
    id:"1",
    date:"20 Apr",
    title:"The Covid-19 Epidemic In 2022 Is Back",
    image:"../images/vitamin-bg1.png",
},{
    id:"2",
    date:"20 Apr",
    title:"The Covid-19 Epidemic In 2022 Is Back",
    image:"../images/vitamin-bg2.png",
},{

},
{
    id:"3",
    date:"20 Apr",
    title:"The Covid-19 Epidemic In 2022 Is Back",
    image:"../images/vitamin-bg1.png",
},
{
    id:"4",
    date:"20 Apr",
    title:"The Covid-19 Epidemic In 2022 Is Back",
    image:"../images/vitamin-bg2.png",
},{
},
{
    id:"5",
    date:"20 Apr",
    title:"The Covid-19 Epidemic In 2023 Is Back",
    image:"../images/vitamin-bg5.png",
},
{
    id:"6",
    date:"20 Apr",
    title:"The Covid-19 Epidemic In 2023 Is Back",
    image:"../images/vitamin-bg5.png",
},
{
    id:"7",
    date:"20 Apr",
    title:"The Covid-19 Epidemic In 2023 Is Back",
    image:"../images/vitamin-bg5.png",
},
{
    id:"8",
    date:"17 Mar",
    title:"Hac hendrerit mus nons semper suspendisse",
    image:"../images/vitamin-bg5.png",
},

]

function LatestNews(){
return(
    <div className="latest-news-container">
        <p className="our-blog">OUR BLOG</p>
        <h1 className="latest-news">Latest News</h1>
        <div className="news">
            <div className="news-item">
               {latestNewsData.map((each)=>(
                <div className="news-card" key={each.id}>
                    <img src={each.image} className="news-img" alt={each.title}/>
                    <div className="news-desc">
                        <p className="news-date">{each.date}</p>
                        <h5 className="news-title">{each.title}</h5>
                    </div>
                </div>
               ))}
            </div>
        </div>

    </div>
)

}

export default LatestNews