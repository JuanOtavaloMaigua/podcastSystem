const Audio = (props)=>{
    console.log(props.src)
    return <div className="audio">
        <audio controls>
            <source src= {props.src} type="audio/mpeg"/>
        </audio>

        <style jsx>
            {`
                .audio{
                    display: flex;
                    justify-content: center;
                }
            `}
        </style>
    </div>
}

export default Audio;