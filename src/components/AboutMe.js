import MyImage from './image1.jpg'

function AboutMe(){
    return(
        <div className="AboutMe">
            <a href="#">Barsha</a>
            <a href="#">Sneha</a>
            <a href="#">Raman</a>
            <h1>About Me</h1>
            <div className="image"> <img src={MyImage} style={{width:300,height:250}}></img></div>
            <p><i>Programming is the best work in the world.It will helps you become smartest mind in the world.</i> </p>
            <p>My name is <strong>Prakash Jha</strong> and I am a web developer.I have beeen developing websites for the past 5 years.I have worked on many projects and have a lot of experience in the field.I am currently looking for job as a web developer.If you have any questions feel free to contact me at prakashjhakk.pj@gmail.com.</p>
        </div>
    )
}

export default AboutMe;