import Title from "./Title"
import TeamItem from "./TeamItem"
import photo from "../vesikalık.jpg";
import AnimatedText from "react-animated-text-content";
import classes from "./TeamList.module.css";


const TeamList = () => {
    const teamMembers = [
        {
            memberName: "Akıntürk Arınç Aslan",
            memberPhoto: photo,
            memberPosition: "CEO/PATRON/BIG BOSS",
            memberFaceBook: "https://tr-tr.facebook.com/people/Ar%C4%B1n%C3%A7-Aslan/1125216341/",
            memberLinkedin: "https://tr.linkedin.com/in/ak%C4%B1nt%C3%BCrk-ar%C4%B1n%C3%A7-aslan-981882110?original_referer=https%3A%2F%2Fwww.google.com%2F",
            memberInstagram: "https://www.instagram.com/arincaslan95",
        },
        {
            memberName: "Asiltürk Ata Aslan",
            memberPhoto: photo,
            memberPosition: "Getir Götürcü Çocuk"
        },
        {
            memberName: "Sezer CSS HTML",
            memberPhoto: photo,
            memberPosition: "CTO"
        },
    ]


    const title = {
        text: "Our Team",
        description: "Some Of Our Experienced Agents"
    }
    return (
        <section className="section-teams">
            <div className="container">
            <AnimatedText
              type="words" // animate words or chars
              animation={{
                x: "200px",
                y: "-20px",
                scale: 1.1,
                ease: "ease-in-out",
              }}
              animationType="float"
              interval={0.06}
              duration={1.5}
              tag="h1"
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
              className={classes.textAnimate}
            >
              {title.text}
            </AnimatedText>
                <div className="row">
                    {teamMembers.map((x) => {
                        return (
                            <TeamItem 
                            propsName = {x.memberName} 
                            propsPhoto = {x.memberPhoto} 
                            propsPosition={x.memberPosition}
                            propsFaceBook={x.memberFaceBook}
                            propsLinkedIn = {x.memberLinkedin}
                            propsInsta = {x.memberInstagram}
                            />
                        )
                    })}


                </div>
            </div>
        </section>
    )
}

export default TeamList;