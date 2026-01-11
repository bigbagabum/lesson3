import style from "./ProfileCard.module.css"


interface Props {
    avatar: string;
    name: string;
    description: string;
}

function ProfileCard({avatar, name, description}: Props){
return <section className={style.container}>
    <img src={avatar} alt="User avatar" />
    <h2>{name}</h2>
    <p>{description}</p>
</section>
}

export default ProfileCard;
