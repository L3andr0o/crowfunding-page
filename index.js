const burgerIcon = document.querySelector(".burger"); 
const burgerMenu = document.querySelector(".list-menu");
const darkBack = document.querySelector(".dark-background");
const closeMenu = document.querySelector(".close");
const openModalFirst = document.querySelector(".f-btn");
const modal = document.querySelector(".modal-background");
const closeModal = document.querySelector(".close-modal");
const buttons = document.querySelectorAll(".opentoo");
const modalsDivs = document.querySelectorAll(".modal-content");
const numberLeft = document.querySelectorAll(".number-left");
const crowModal = document.querySelectorAll(".crow-modal");
const radioInpts = document.querySelectorAll(".radio-content");
const stockLeft = document.querySelectorAll(".number-left");
const stands = document.querySelectorAll(".stand");
const leftModal = document.querySelectorAll(".number");
const inputMoney = document.querySelectorAll(".moneyhere");
const btnContinue = document.querySelectorAll(".continue");
const thanks = document.querySelector(".thanks");
const gotIt = document.querySelector(".gottim");
const backedMoney = document.querySelector(".backed-money");
const totalBackers = document.querySelector(".backers-total");
const barContent = document.querySelector(".bar-content");

burgerIcon.addEventListener("click",(e)=>{
    burgerIcon.classList.add("hide");
    burgerMenu.classList.add("appear");
    darkBack.classList.add("dark");
});

    openModalFirst.addEventListener("click",(e)=>{
    modal.classList.add("appear")
});

const closeModalClick = (click,modal)=>{
    click.addEventListener("click",(e)=>{
    modal.classList.remove("appear");
    crowModal.forEach((doc)=>{
        doc.classList.remove("appear")
    });
    modalsDivs.forEach((doc)=>{
        doc.classList.remove("borderGreen")
    });
    radioInpts.forEach((doc)=>{
        doc.classList.remove("appear")
    })
})};
closeModalClick(closeModal,modal);

const closeMenuClick = (click)=>{
    click.addEventListener("click",(e)=>{
        burgerMenu.classList.remove("appear");
        burgerIcon.classList.remove("hide");
        darkBack.classList.remove("dark");
        thanks.classList.remove("appear");
        crowModal.forEach((doc)=>{
            doc.classList.remove("appear")
        });
        modalsDivs.forEach((doc)=>{
            doc.classList.remove("borderGreen")
        });
        radioInpts.forEach((doc)=>{
            doc.classList.remove("appear")
        })
    })
};
closeMenuClick(closeMenu);
closeMenuClick(darkBack);
closeMenuClick(gotIt);


const clickCrowOpen = (btn,ib,i,pos)=>{
    btn[ib].addEventListener("click",(e)=>{
        modal.classList.add("appear");
        window.scrollTo(modalsDivs,pos);
        modalsDivs[i].classList.add("selected")
        crowModal[i].classList.add("appear");
        modalsDivs[i].classList.add("borderGreen");
        radioInpts[i].classList.add("appear");
    })
};
clickCrowOpen(buttons,0,1,500);
clickCrowOpen(buttons,1,2,800);
clickCrowOpen(buttons,2,3,1000);

const modalAvbl = (element,i,i2)=>{
    element[i].addEventListener("click",(e)=>{
        element[i].classList.add("selected");
        element[i].classList.add("borderGreen");
        radioInpts[i].classList.add("appear")
        crowModal[i].classList.add("appear");
        if(element[i2].classList.contains("selected")){
            element[i2].classList.remove("borderGreen");
            crowModal[i2].classList.remove("appear");
            radioInpts[i2].classList.remove("appear")
        }
    })
};

modalAvbl(modalsDivs,0,1);
modalAvbl(modalsDivs,0,2);
modalAvbl(modalsDivs,0,3);

modalAvbl(modalsDivs,1,0);
modalAvbl(modalsDivs,1,2);
modalAvbl(modalsDivs,1,3);

modalAvbl(modalsDivs,2,1);
modalAvbl(modalsDivs,2,3);
modalAvbl(modalsDivs,2,0);

modalAvbl(modalsDivs,3,1);
modalAvbl(modalsDivs,3,2);
modalAvbl(modalsDivs,3,0);

const modalOff = (element,elementb,i,ib)=>{
    if(element[i].textContent == 0){
        elementb[ib].classList.add("outStock");
    }
}
modalOff(leftModal,modalsDivs,0,1);
modalOff(leftModal,modalsDivs,1,2);
modalOff(leftModal,modalsDivs,2,3);
modalOff(stockLeft,stands,0,0);
modalOff(stockLeft,stands,1,1);
modalOff(stockLeft,stands,2,2);

const sendMoney = (i,value,nl)=>{
        btnContinue[i].addEventListener("click",()=>{
            if(inputMoney[i].value >= value){
                thanks.classList.add("appear");
                modal.classList.remove("appear");
                window.scrollTo(0,0);
                darkBack.classList.add("dark");
                backedMoney.textContent = (Number(backedMoney.textContent) + Number(inputMoney[i].value / 1000)).toFixed(3);
                totalBackers.textContent = (Number(totalBackers.textContent) + .001).toFixed(3);
                numberLeft[nl].textContent = (Number(numberLeft[nl].textContent) - 1);
                leftModal[nl].textContent = (Number(leftModal[nl].textContent) - 1);
                const barPercent =  `${Number(backedMoney.textContent)}%`;
                barContent.style.width = barPercent; 
            }
        })    
}
sendMoney(1,25,0);
sendMoney(0,1);
sendMoney(2,75,1);
sendMoney(3,200,2);
const barPercent =  `${Number(backedMoney.textContent)}%`;
barContent.style.width = barPercent; 

