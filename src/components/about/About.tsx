import React from "react";
import real from "./../../images/real.jpeg";
import sign from "./../../images/sign.png";
import diploma from "./../../images/diploma.png";
import logo from "./../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section className="relative py-10">
      <div id="about" className="absolute -top-28"></div>
      <div className="container mx-auto px-10">
        <h1 className="md:text-4xl text-3xl w-full text-center pb-10">
          מי אנחנו
        </h1>
        <div className="about__content-wrap flex md:flex-row flex-col justify-center md:items-start items-center">
          <div className="about__img-wrap md:w-1/2 w-full 2xl:px-32 xl:px-24 lg:px-10 px-0">
            <img src={diploma} alt="diploma-image" />
          </div>
          <div className="about__content md:w-1/2 w-full 2xl:px-44 xl:px-36 lg:px-20 md:px-9 px-0">
            {/* <img className="md:block hidden" src={real} alt="about-image" /> */}
            <h4 className="text-2xl text-right text-regal-blue">רי/מקס - רשת גלובלית: מעל 115000 סוכנים ב110 מדינות בעולם ו7000 משרדים</h4>
            <div className="about__content-inner">
              <p className="text-2xl text-right text-regal-blue">
                רי/מקס מעניקה לכם גישה לבסיס ההצעות הנרחב ביותר בכל כדור הארץ. בין אם חלומכם הוא בית חם על
                רי/מקס תמצא –חוף הים התיכון, דירה מסוגננת בעיר גדולה בארופה או וילה מבודדת אל מול נוף אקזוטי
                הצעה בדיוק עבורכם
              </p>
              <p className="text-2xl text-right text-regal-blue">
                סוכנים מקצועיים: 115000 הסוכנים שלנו זה לא רק מספר. זהו צוות מקצוענים מנוסים המסוגלים להגשים
                את חלומותיכם. אנו מבינים את הצרכים שלכם ועובדים לשביעות רצונכם המלאה.
              </p>
              <p className="text-2xl text-right text-regal-blue">
                בטחון ואמינות: 7000 המשרדים שלנו ברחבי העולם מבטיחים כי כל עסקה תושלם על פי הסטנדרטים
                המחמירים ביותר אל בטחון ואמינות. מבחינת רי/מקס ביטחונכם הוא בגדר עדיפות עליונה. אנו מבטיחים
                שקיפות ומקצוענות בכל שלבי העסקה. ניסיון רב שנים: רי/מקס, הפועלת יותר מ45 שנים בשוק הנדל"ן הנה
                חברה מובילה עולמית, הבונה עבור לקוחותיה סיפורי הצלחה
              </p>
              <p className="text-2xl text-right text-regal-blue">
                בנינו גשרים בין מדינות ותרבויות והפכנו את תהליך רכישת הנדל"ן בחו"ל לחוויה פשוטה ומרתקת
              </p>
              <p className="text-2xl text-right text-regal-blue">
                גישה חדשה ופילוסופיה פורצת דרך בשוק הנדל"ן. רי/מקס אינה מציעה ארבע קירות וקורת גג –רי/מקס
                בלבד, אלא נוחות ויוקרה!
              </p>
              <p className="text-2xl text-right text-regal-blue">
                תתחילו את דרככם אל עולם הנדל"ן עם רי/מקס!  
              </p>
              <p className="text-2xl text-right text-regal-blue">
                צרו עמנו קשר עכשיו ותנו לנו את ההזדמנות להגשים את חלומכם על נדל"ן בחו"ל.
              </p>
            </div>
            <div className="about__content-contact flex h-max items-center justify-between">
              <img
                className="2xl:w-36 lg:w-32 md:w-28 sm:w-40 w-32"
                src={logo}
                alt="logo"
              />
              <div className="md:text-md text-sm font-bold text-regal-blue">
                <div>
                  <p className="about__contact">
                    רחי הרצל 20, חיפה
                    <FontAwesomeIcon
                      className="text-regal-red ml-3 text-xl"
                      icon={faLocationDot}
                    />
                  </p>
                  <p className="about__contact">
                    0586557877
                    <FontAwesomeIcon
                      className="text-regal-red ml-3 mt-2 text-xl"
                      icon={faPhone}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
