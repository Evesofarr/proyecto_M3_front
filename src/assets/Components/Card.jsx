export default function Card({ animals }) {

    return (
        <section className="cardHomepage">
            {animals ?
                (animals.length > 0 ?
                    animals.map(animal => (
                        <div onClick={() => popInfo(animal._id)} className="card" key={animal._id} id={animal._id}>
                            <div className="amiboImgCont">
                                <img className="amiboImg" src={animal.image_url} alt={animal.name} />
                            </div>
                            <h2>{animal.name}</h2>
                            <p>{animal.species}</p>
                        </div>
                    ))
                    : <div className="loader"><img src="../../../public/loader.gif" alt="" /></div>)
                : <div className="loader"><img className="vibrar" src="../../../public/Error.png" alt="" /></div>}
        </section>
    );
};