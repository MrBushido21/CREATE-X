body {
    font-family: "Ubuntu";
    color: #787A80;
    font-weight: 400;
    font-size: calc(16rem/14);
    line-height: 1.5;
    overflow-x: hidden;
    &._lock {
        overflow: hidden;
    }
}
[class*= __container] {
    max-width: calc(1260rem/14);
    margin: 0 auto;
    padding: 0 calc(15rem/14);
}

[class*= __h2] {
    font-weight: 700;
    font-size: calc(46rem/14);
    line-height: 1.3;
    text-align: center;
    color: #1E212C;
    margin-bottom: calc(24rem/14);

    @media (max-width:425px) {
        font-size: calc(32rem/14);
    }
}

[class*= __sub-title] {
    font-size: calc(18rem/14);
    line-height: 1.5; /* 27/18 */
    text-align: center;
    color: #787A80;
    margin-bottom: calc(60rem/14);
}

[class*= __dop-title] {
    display: flex;
    justify-content: center;
    column-gap: calc(40rem/14);
    margin-top: calc(80rem/14);
    transition: all 1s ease 0s;
    @media (max-width: 690px) {
        flex-direction: column;
        align-items: center;
        row-gap: calc(25rem/14);
        margin-top: calc(40rem/14);
    }
}

[class*= __h3] {
    font-weight: 700;
    font-size: calc(28rem/14);
    line-height: 1.5;
    color: #1E212C;

    @media (max-width: 475px) {
        font-size: calc(22rem/14);
        text-align: center;
    }
}

[class*= __button-view] {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(207rem/14);
    height: calc(52rem/14);
    border-radius: 4px;
    background-color: #FF5A30;
    font-weight: 700;
    font-size: calc(16rem/14);
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #fff;

    &:hover {
        background-color: #ee3b0f;
        transition: all 0.3s ease 0s;
    }

    @media (max-width: 475px) {
        width: 100%;
    }
}

//================================================================================================================================================
//-----------------TEXT---------------\
///================================================================================================================================================
//-----------------TEXT---------------\
//================================================================================================================================================
//-----------------TEXT---------------\
header.services {
    margin-top: 0;
    background: url('../images/services-header/background.jpg') 0 0 no-repeat;
    background-position: top right;
}
//================================================================================================================================================
//-----------------TEXT---------------\
.header__navigation {
    margin-top: calc(55rem/14);

    nav {
        display: flex;
        align-items: center;
        column-gap: calc(8rem/14);
    }

    a {
        font-size: calc(14rem/14);
        color: #424551;

        &.active {
            color: #9A9CA5;
        }
    }
}
//================================================================================================================================================
//-----------------TEXT---------------\
.header__title {
    margin-top: calc(40rem/14);
    margin-bottom: calc(179rem/14);
    h1 {
        font-weight: 700;
        font-size: calc(72rem/14);
        line-height: 1.5;
        color: #1E212C;
        margin-bottom: calc(24rem/14);

        @media(max-width:425px) {
            font-size: calc(42rem/14);
        }
    }

    p {
        font-size: calc(20rem/14);
        line-height: 1.5;
        max-width: calc(600rem/14);
        @media(max-width:425px) {
            font-size: calc(16rem/14);
        }
    }
}
//================================================================================================================================================
//-----------------TEXT---------------\
.section {
    margin-top: calc(120rem/14);
    display: flex;
    justify-content: space-between;
    column-gap: calc(15rem/14);
    align-items: center;

    img {
        max-width: 100%;
    }


    @media(max-width:1030px) {
        flex-direction: column;
        row-gap: calc(30rem/14);

        &.revers {
            flex-direction: column-reverse;
        }
    }

    
}

.block-text {
    h3 {
        font-weight: 700;
        color: #1E212C;
        font-size: calc(32rem/14);
        line-height: 1.5;
        margin-bottom: calc(24rem/14);
    }

    p {
        line-height: 1.5;
        margin-bottom: calc(48rem/14);
        max-width: calc(575rem/14);
    }

    a {
        border: 1px solid #FF5A30;
        border-radius: 4px;
        display: flex;
        width: calc(160rem/14);
        height: calc(44rem/14);
        color: #FF5A30;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        
        &:hover {
            background-color: #ff593067;
            transition: all 0.3s ease 0s;
        }
    }
}
//================================================================================================================================================
//-----------------TEXT---------------\

