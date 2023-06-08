header.work {
    background: url('../images/work-header/background.jpg') 0 0 no-repeat;
    position: relative;
}

.categories {
position: absolute;
bottom: -95px;
left: 50%;
transform: translate(-50%, 0);
display: flex;
column-gap: calc(20rem/14);

@media(max-width:1230px) {
    position: static;
    transform: translate(0);  
}

@media(max-width:570px) {
    flex-direction: column;
    row-gap: calc(24rem/14);
    width: 100%;
}
    &__item {
        cursor: pointer;
        text-align: center;
        padding: calc(32rem/14);
        width: calc(230rem/14);
        background-color: #fff;
        box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03);
        border-radius: 4px;
        

        @media(max-width:720px) {
            max-width: calc(230rem/14);
            padding: 15px;
        }

        @media(max-width:570px) {
            max-width: 100%;
            width: 100%;
            padding: 0;
        }

        &.active {
            transition: all 0.3s ease 0s;
            background-color: #FF5A30;
        }
        &.click:hover {
            transition: all 0.3s ease 0s;
            background-color: #FF5A30;
        }

    }

    &__img {
        font-size: calc(48rem/14);
        color: #FF5A30;
        margin-bottom: calc(16rem/14);

    }


    &__item.active .categories__img, &__item.active h6 {
        transition: all 0.3s ease 0s;
        color: #fff;
    }
    &__item.click:hover .categories__img, &__item.click:hover h6 {
        transition: all 0.3s ease 0s;
        color: #fff;
    }
    
    h6 {
        font-weight: 700;
        color: #9A9CA5;

        @media(max-width:804px) {
            font-size: calc(12rem/14);
        }

        @media(max-width:570px) {
            font-size: calc(14rem/14);
        }
    }
}
//================================================================================================================================================
//-----------------TEXT---------------\
//================================================================================================================================================
//-----------------TEXT---------------\

.protfolio {
margin-top: calc(120rem/14);

&__all-projects.active, &__construction.active, &__interior.active {
    display: block;
}

&__all-projects, &__construction, &__interior {
    display: none;
}


    &__row {
        display: flex;
        justify-content: space-between;
        column-gap: calc(15rem/14);
        margin-bottom: calc(30rem/14);

        @media(max-width:570px) {
            flex-direction: column;
            row-gap: calc(30rem/14);
        }

    }

    .last-row {
        margin-bottom: 0;
        transform-origin: top;
        transform: rotateX(-90deg);
        
        &.active {
            transform: rotateX(0deg);
            transition: all 0.3s ease 0s;
        }
    }

    &__article {
        cursor: pointer;
        text-align: center;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            max-width: 100%;
            margin-bottom: calc(16rem/14);
            flex: 1 1 auto;
        }

        h5 {
            font-weight: 700;
            font-size: calc(20rem/14);
            color: #1E212C;
            margin-bottom: calc(4rem/14);

            @media(max-width:804px) {
                font-size: calc(16rem/14);
            }
        }

        div {
            font-size: calc(14rem/14);
            margin-bottom: calc(24rem/14);
        }

        a {
            width: calc(172rem/14);
            height: calc(44rem/14);
            border: 1px solid #FF5A30;
            border-radius: 4px;
            text-transform: uppercase;
            font-size: calc(14rem/14);
            line-height: 3.14; /* 44/14 */
            letter-spacing: 0.5px;
            color: #FF5A30;
            font-weight: 700;
            transform-origin: top;
            transform: rotateX(-90deg);
            transition: all 0.3s ease 0s;
    
            &:hover {
                background-color: #ee3b0f;
                color: #fff;
                transition: all 0.3s ease 0s;
            }
        }

        &:hover a {
            transform: rotateX(0deg);
        }
    }

    &__button {
        display: flex;
        margin: 0 auto;
        padding-bottom: calc(60rem/14);
        column-gap: calc(16rem/14);
        align-items: center;
        background-color: transparent;

        &.active {
            display: none;
        }
    }
}

