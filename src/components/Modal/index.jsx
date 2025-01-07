import GetMembers from "../GetMembers"

export default function Modal(prop){
  return(
    <div className="fixed left-0 right-0 bottom-0 top-0  bg-slate-500 bg-opacity-50 flex justify-center items-center" >
    <div className="w-[600px] h-[600px] bg-red-300 ">
        {prop.children}
        <GetMembers/>

        
        
        


    </div>
</div>
  )
}