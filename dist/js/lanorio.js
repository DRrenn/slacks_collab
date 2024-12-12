const enter_faq = document.querySelectorAll('.accordion');

enter_faq.forEach(en_faqs => {
    en_faqs.addEventListener("click", () => {
        en_faqs.classList.toggle("active");
    })

})