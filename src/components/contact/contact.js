import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Contact = (props) => {
    const {myInfo} = props;

    return (
        <div className="contact mt-4" id="contact">
            <div className="text-center mb-1">
                <h2 className="marker marker-center">Contact</h2>
            </div>
            <div className="h5 text-center">
                Let's have a talk to know each other!
            </div>
            <p className="text-center">
                If you like my work and want to avail my services then drop me a message using my email, skype or my contact number below.
            </p>
            <p className="text-center">
                Wish you have a great day!. <FontAwesomeIcon icon={["far", "smile-beam"]} />
            </p>

            <p className="text-center">
                <strong>Email: </strong>  {myInfo.email}
            </p>

            <p className="text-center">
                <strong>Skype: </strong>  {myInfo.skype}
            </p>

            <p className="text-center">
                <strong>Contact Number: </strong>  {myInfo.phone_number}
            </p>
        </div>
    )
}
export default Contact;