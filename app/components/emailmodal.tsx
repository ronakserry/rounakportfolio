
const PersonalEmail = "rounakserry@gmail.com"

function EmailModal (){
    return(
        <>
        <section className="m-3 titleBox flex flex-col mt-1 items-center gap-1">
            <h1 className="title">به من ایمیل بده ^*^</h1>
            <h2 className="subtitle">من پیامت رو تو سریع‌ترین وقت ممکن جواب میدم</h2>
        </section>
        <section className=" flex flex-col justify-centerauto items-center gap-3">
            <div className="w-55 rounded-md border text-center ">
                <a
                    href={`mailto:${PersonalEmail}`}
                >
                    {PersonalEmail}
                </a>
                </div>

                <button
                type="button"
                onClick={() => {
                    void navigator.clipboard.writeText(PersonalEmail);
                }}
                className="rounded-md m-3 w-55 h-12 bg-primary px-5 py-2 text-sm font-medium text-white"
                >
                کپی ایمیل
                </button>
      </section>
    </>
    );
}
export default EmailModal; 

