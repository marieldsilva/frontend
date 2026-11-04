import FormContainer from "../components/FormContainer";
import HeaderContainer from "../components/HeaderContainer";
import ListContainer from "../components/ListContainer";

const StudentPage = () =>{
    const students = [
        {id: 1, srcode: "24-79974", name: "Anita Job", program: "BSIT"},
        {id: 2, srcode: "24-16819", name: "John Doe", program: "BSIT"},
        {id: 3, srcode: "24-12345", name: "Don Steph B. Living", program: "BSIT"},
    ];

    return(
        <>
            <HeaderContainer />
            <FormContainer />
            <ListContainer data={students} />
        </>
    )
}

export default StudentPage;