import LeftContactBlock from "../components/contact";
import Form from "../components/Form";
import Header_2 from "../components/Header_2";

export default function Contacts(){
    return(
         <main className="flex flex-col md:flex-row min-h-screen">
      <LeftContactBlock />
       <Form></Form>
    </main>
    )
}