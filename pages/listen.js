import React, {Component} from 'react'
import Navigation from '../Components/navigation'
import Audio from '../Components/audio'


const Listen = (props)=>{
    console.log(props.data)

    return <div>
        <Navigation podcast_title={props.name}/>
        <div className="imgpodcast">
            <img src={props.data.body.audio_clip.user.urls.image}/>
        </div>
        <Audio src={props.data.body.audio_clip.urls.high_mp3}/>

        <style jsx>
            {`

                .imgpodcast img{
                    width: 100%;
                    height: 100%;    
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

Listen.getInitialProps = async ({query})=>{
    let id_podcast = query.id
    let podcast_name = query.name
    // try{
    //     let request = await fetch(`https://api.audioboom.com/audio_clips/${id_podcast}.mp3`)
    //     var data = await request.json()
    //     let data_retrieve = data.body.audio_clips
    //     let mp3_data = data_retrieve.urls.high_mp3
    //     let image_episode = data_retrieve.urls.post_image.original

    //     return {mp: mp3_data, image: image_episode, name: podcast_name}
    // }
    // catch(err){
    //     return {error: "No existen episodios", name: podcast_name, id_pod: id_podcast}
    // }

    let request = await fetch(`https://api.audioboom.com/audio_clips/${id_podcast}.mp3`)
    var data = await request.json()

    return {data: data, name: podcast_name}
}

export default Listen;