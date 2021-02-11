import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import React, { Component} from 'react'
import Link from 'next/link'

const App = (props)=>{
    const listPodcasts = props.channels

    return <div>
        <div>
            <h1>Podcast</h1>
            <h2>Tus podcasts</h2>
            <div>
                {
                    listPodcasts.map((item)=>{
                        return <div className="container_podcast" key={item.id}>
                            <div className="orverlapImg">
                                <img src={item.urls.logo_image.original} alt="img podcast"/>
                                <label>{item.recommendation.position}</label>
                            </div>
                            
                            <div>
                                <Link href={`/listen?id=${item.id}&name=${item.title}`} >
                                    <h3>{item.title}</h3>
                                </Link>
                                
                                <div>{item.recommendation.default_follow ? <h4>Unfollow</h4>:<h4>Follow</h4>}</div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>

        <style jsx>
            {`
                h1, h4{
                    display: flex;
                    color: #8AC73A;
                    justify-content: center;
                    letter-spacing: 2px;
                }
                
                h2{
                    color: #818181;
                    padding-left: 10px;
                }

                h3{
                    color: #E9E9E9;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    
                }

                .container_podcast{
                    display: grid;
                    grid-gap: 15px;
                    padding-bottom: 15px;
                    padding-left: 20px;
                    grid-template-columns: repeat(2, 1fr);
                    border-radious: 55px;
                }

                .orverlapImg{
                    display: grid;
                    grid-template-rows: 1fr
                    box-shadow: 0px 2px 6px #E9E9E9;
                    cursor:pointer;
                }

                .orverlapImg:hover{
                    opacity: 0.5;
                    cursor:pointer;
                }

                .orverlapImg img{
                    grid-area: 1/1/2/2;
                }

                .orverlapImg label{
                    grid-area: 1/1/2/2;
                    grid-row: 1/2;
                    text-align: left;
                    padding: 5px;
                    font-size: 40px;
                    color: #23475C;
                }
                
                .container_podcast img{
                    width:100%;
                }
                

            `}
        </style>

        <style jsx global>
                {`
                    body{
                        background: #23475C;
                    }
                `}
        </style>
    </div>
}

App.getInitialProps = async () =>{
    const getData = await fetch('https://api.audioboom.com/channels/recommended')
    const {body: channels} = await getData.json() 
    return {channels}
}

export default App;