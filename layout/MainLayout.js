import Link from 'next/react';

const MainLayout = props =>{

    return (
        //tag html
        <div className = 'container'>
            <div className = 'topbar'>
                <div className='logo-container'>
                    
                    STOCK
                    
                </div>
                <div className='menu-container'>
                    
                    <div>Products</div>
                    
                    <div>Manage</div>
                    <div>Profile</div>
                </div>

            </div>
            <div className='content'>
                {prop.children}
            </div>
            

            <style jsx>{`
                .topbar{
                    display: flex;
                    //justify-content: flex-start;
                    //justify-content: flex-end;
                    //justify-content: space-around;
                    justify-content: space-between;
                    align-items: center;
                    height: 32px;
                    background-color: red;
                    padding: 0px 40px
                    box-shadow: rgba(0,0,0,0.2) 0px 1px 2px;
                }

                .menu-container{
                    display: flex;
                }
                .menu-container div{
                    margin-left: 5px;
                    
                }
                .link{
                    text-decoration: none;
                }


            `}</style>

            <style jsx global>{`
                @font-face{
                    font-family: Roboto;
                    src: url(/static/fonts/Roboto-Regular.ttf);
                }

                body{
                    margin: 0;
                    font-family:'Roboto';
                    font-weight: 400;
                }
            `
            }
            </style>
        </div>
    )

}


export MainLayout 