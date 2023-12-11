import './editPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUserPen, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Header from '../../mainpage/header'
import { useRef } from 'react'
function edit() {
    const newfname = useRef(null);
    const newlname = useRef(null);
    const newEmail = useRef(null);
    const newMobile = useRef(null);

    return (
        <><Header /><div className='edit'>

            <div><img className='Profile1' src='../src/components/images/Profile.png' /></div>
            <div><button className='Change'> CHANGE     <FontAwesomeIcon icon={faUserPen} /></button></div>
            <div className='name'> Wannaporn TeachaBunnaput </div>

            <div className='keepbox'>

                <div className='box'>
                    <div className='letter'> FIRST NAME </div>
                    <input ref={newfname} className='namebox' type="text" placeholder='First Name' />

                    <div className='letter'> LAST NAME </div>
                    <input ref={newlname} className='namebox' type="text" placeholder='Last name' />
                </div>

                <div className='box'>
                    <div className='letter'> EMAIL </div>
                    <input ref={newEmail} className='namebox' type="text" placeholder='Email' />

                    <div className='letter'> MOBLIE </div>
                    <input ref={newMobile} className='namebox' type="text" placeholder='Mobile' />
                </div>

            </div>

            <div>
                <a href="/profile"><button className='savebut'>
                    SAVE
                </button></a>
            </div>
        </div>
            <form action="">
                <input className='asd' type="text" value="asd" id="" />
            </form>
        </>
    );
}

export default edit