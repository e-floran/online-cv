import Social from "./Social";

function Contact(){
    return(
        <section className="formContainer">
            <article className="sectionTitle">
                <div className="pulsarContainer">
                    <div className="pulsar"></div>
                </div>
                <h3>Contactez-moi</h3>
            </article>
            <p>Vous souhaitez me proposer une opportunité professionnelle, ou tout simplement échanger ? N'hésitez pas à me contacter à l'aide de l'un des réseaux accessibles ci-dessous.</p>
            <form id="homeForm">
                <label htmlFor="formName">Votre nom</label>
                <input id="formName" type="text" form="homeForm" placeholder="Votre nom" required></input>
                <label htmlFor="formMail">Votre adresse email</label>
                <input id="formMail" type="email" form="homeForm" placeholder="exemple@mail.com" required></input>
                <label htmlFor="formText">Votre message</label>
                <textarea id="formText" form="homeForm" required></textarea>
                <button type="submit" id="formButton" form="homeForm">Envoyer</button>
            </form>
            <Social />
        </section>
    )
}
export default Contact;