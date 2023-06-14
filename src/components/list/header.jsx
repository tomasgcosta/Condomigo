
export default function Header({ name, url }) {

    
    return (
        <div>
            <div >
                <img src={url} alt='123'/>
            </div>
            <div>
                <p>{name}</p>
            </div>
        </div>
    )
}