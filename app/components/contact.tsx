import { useState } from "react";
import { Form, useNavigate } from "react-router"

function Contact(){
    return (
        <>

        <section className="titleBox">
            <h6 className="mainTitle" id="mainTitle">
            اگه دوست دارین با من حرف بزنین و همکاری کنیم، این فرم رو پر کنید و درخواست بدین بهم. من تو سریع‌ترین زمان ممکن بهتون پیام میدم و با هم حرف می‌زنیم. 
            </h6>
            <h6 className="subTitle font-medium mt-4" id="subTitle">در مورد چه چیزی قراره با هم صحبت کنیم؟</h6>
        </section>

        <section className="categoryBox mt-4 flex flex-row items-center gap-3 justify-center text-center">
            <div className="categories gap-3 flex flex-row items-center gap-3 justify-center text-center">
                <h6 className="border border-primary rounded-full h-8 w-30">طراحی uiux</h6>
                <h6 className="border border-primary rounded-full h-8 w-30">برنامه نویسی وب</h6>
                <h6 className="border border-primary rounded-full h-8 w-30">تولید محتوا</h6>
                <h6 className="border border-primary rounded-full h-8 w-30">سئو</h6>
                <h6 className="border border-primary rounded-full h-8 w-30">سایر</h6>
            </div>
        </section>

        <Form></Form>
        </>
    )
}
export default Contact;