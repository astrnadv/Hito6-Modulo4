import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.profile}>
            <div className={style.avatar}>
                AM
            </div>

            <div className={style.info}>
                <p><strong>Usuario:</strong> Ana</p>
                <p><strong>Email:</strong> ana@email.com</p>

                <button className={style.logout}>
                    Cerrar sesión
                </button>
            </div>
        </div>
    );
};

export default Profile;
