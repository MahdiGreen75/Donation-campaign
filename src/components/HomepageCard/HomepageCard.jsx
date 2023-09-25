

const HomepageCard = ({picture, title, id, category, category_bg, card_bg, text_button_bg}) => {
    // console.table(picture, title, id, category, category_bg, card_bg, text_button_bg);
    console.log(`${card_bg}`)
    console.log(`${category_bg} ${"text"+text_button_bg.slice(2)}`)
    console.log(`${"text" + text_button_bg.slice(2)}`)
   
    return (
        <div>
            <div className="h-[70%]">
                <img className="w-full" src={picture} />
            </div>
            <div className={`${card_bg}`}>
                <h1 className={`${category_bg} ${"text" + text_button_bg.slice(2)}`}>{category}</h1>
                <p className={`${"text-"+text_button_bg.slice(2)}`}>{title}</p>
            </div>
        </div>
    );
};

export default HomepageCard;