import Link from 'next/link'
const Navigation = (props)=>{
    return <div>
            <div className="nav-bar">
                <Link href="/">
                    <h5> &#8592; inicio</h5>
                </Link>

                <h3> {props.podcast_title}</h3>
                <h1></h1>
            </div>

            <style jsx>
                {`
                    .nav-bar{
                        height: 50px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        color: #8AC73A;
                        padding-left:10px;
                    }
                `}
            </style>
    </div>

}

export default Navigation;