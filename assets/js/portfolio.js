const itemsData = [
            { cat: 'competition', title: 'CARCAL CAR ENERGY CALCULATOR ', rank: 'รางวัลรองชนะเลิศอันดับ 1', date: '25-27 เมษายน 2569'
            , location: ' มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี', by: 'คณะเทคโนโลยีสารสนเทศ (SIT) มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี'
            , desc: 'เป็นโปรเจกต์ที่ผมทำใน SIT CAMP กับเพื่อนในค่ายและได้รับรางวัลรองชนะเลิศอันดับ 1 ซึ่งรุ่นพี่ได้กำหนดเป็นธีมพลังงานผมภูมิใจผลงานเพราะผมเป็นคนเสนอแนวคิดให้เพื่อนกับรุ่นพี่ เพราะตอนนั้นราคาน้ำมันสูงขึ้นและเป็นข่าวดังกับคนไทย โดยเว็บไซต์นี้จะคำนวณราคาพลังงานรถยนต์ระหว่างรถน้ำมันและรถไฟฟ้า โดยที่อยากให้เป็นเว็บไซต์คำนวณเพราะรุ่นพี่ในค่ายได้สอนการคำนวณ GPAX จากการกำหนดชื่อวิชา หน่วยกิต และ GPA หน้าที่ของผม: กระผมรับหน้าที่ได้ในการทำ javascript โดยมีพี่นนท์เป็นที่ปรึกษาคอยให้คำแนะนำ โปรเจกต์ของผมคือคำนวณเปรียบเทียบราคารถน้ำมันและรถไฟฟ้า EV กำกับฟังชั่นถ้ากรอกข้อมูลไม่ครบจะกำหนด null และขึ้นข้อมูลกรอกข้อมูลให้ครบ และรถไฟฟ้า EV การชาร์จแบตเตอรี่ต้องกำกับให้เปอร์เซ็นต์ที่ต้องการมากกว่าเปอร์เซ็นต์ปัจจุบัน หากเขียนน้อยกว่าระบบจะเตือนและกำหนดเลขที่กรอกกำกับเลขภายใน 0-100 และห้ามเลขติดลบและห้ามเกิน 100'
            , img: 'assets/images/st1.jpg', gallery: ['assets/images/st1.jpg', 'assets/images/carcal.png','assets/images/sitcamp5.jpg','assets/images/sitcamp6.jpg','assets/images/SITCAMP11.jpg']
            , slides: 'GROUP 9.pdf', rel: 'https://car-cal-sit-camp-fmwh.vercel.app/'
            , github: 'https://github.com/Warisara-Lothong/CarCal_SIT-CAMP.git' },

            { cat: 'competition', title: 'ระบบจัดการพลังงานจาก Regenerative Braking ด้วยปัญญาประดิษฐ์สำหรับรถไฟฟ้า และ ระบบขนส่งทางราง '
            , rank: 'เหรียญเงินระดับชาติ', date: '17 ตุลาคม 2569'
            , location: 'สถาบันสารสาสน์เทคโนโลยีแห่งสุวรรณภูมิ', by: 'การประชุมวิชาการ ระดับชาติ ครั้งที่ 4 ประจำปี 2569 สถาบันสารสาสน์เทคโนโลยีแห่งสุวรรณภูมิ'
            , desc: 'ระบบจัดการพลังงานจาก Regenerative Braking ด้วย AI สำหรับรถไฟฟ้าและระบบขนส่งทางราง บทความนี้นำเสนอในงานประชุมวิชาการระดับชาติ ครั้งที่ 4 ปี 2569 ของสถาบันสารสาสน์เทคโนโลยีแห่งสุวรรณภูมิ โดยปัญหาที่ต้องการแก้คือรถไฟฟ้าใช้ไฟมากโดยเฉพาะตอนเร่งความเร็วและตอนชะลอระบบ Regenerative Braking เปลี่ยนพลังงานจลน์กลับเป็นไฟฟ้าได้ แต่พลังงานนี้เกิดเป็นช่วงๆ และมักไม่ตรงกับช่วงที่มีความต้องการใช้ พลังงานบางส่วนจึงสูญเปล่า จึงเกิดเป็นแนวคิดใช้ AI วิเคราะห์ข้อมูลการเดินรถแบบเรียลไทม์ ได้แก่ ความเร็ว ตำแหน่ง การเร่งและชะลอ และความต้องการไฟของขบวนรถกับสถานี จากนั้นคาดการณ์พลังงานที่กู้คืนได้แล้วจัดสรรไปยังปลายทางที่เหมาะสมให้รถไฟขบวนอื่นที่กำลังเร่งความเร็วและระบบกักเก็บพลังงาน (ESS) เช่น แบตเตอรี่ ซึ่งการใช้ Ai จะกล่าวถึง Random Forest ใช้พยากรณ์พลังงานที่กู้คืนได้หรือความต้องการใช้ไฟ และ Deep Reinforcement Learning ใช้ตัดสินใจจัดสรรพลังงานภายใต้ข้อจำกัดของระบบร่วมกับผลพยากรณ์จะป้อนเข้ากระบวนการ Optimization เพื่อวางแผนจัดสรรผลสรุปเป็นการศึกษาเชิงแนวคิดและการจำลองระดับระบบการรวบรวมเอกสารและงานวิจัย แล้วเปรียบเทียบระบบที่มี AI กับระบบที่ไม่มี AI จากตัวชี้วัดคือ อัตราการนำพลังงานกลับมาใช้ การสูญเสียพลังงานและปริมาณไฟที่ดึงจากระบบหลักการใช้ AI มีแนวโน้มช่วยให้ตัดสินใจจัดสรรได้ดีขึ้น เปลี่ยนจากกู้คืนพลังงานเป็นกู้คืนและบริหารพลังงานอย่างเหมาะสม'
            , img: 'assets/images/SSVIT1!.jpg'
            , gallery: ['assets/images/SSVIT1!.jpg','assets/images/SSVIT2.png','assets/images/SSVIT.jpg']
            , doc: 'บทความวิชาการ SSVIT.pdf'
            , slides: 'Regenerative Braking with AI 2nd.pdf'},

            { cat: 'competition', title: 'Eco2Local ระบบนิเวศถังขยะอัจฉริยะเพื่อการจัดการสิ่งแวดล้อมและลดต้นทุนภาครัฐ'
            , rank: 'เหรียญเงินประเทศ', date: '1 กันยายน 2569'
            , location: 'Change Education', by: 'Change Education'
            , desc: 'ในการแข่งขันCHANGE INNOVATION AWARDS 2026 ซึ่งมีผู้แข่งขันมีผู้เข้าแข่งรวมทุกหัวข้อ 515 ทีมซึ่งทีมของผมได้เหรียญเงิน คะแนน 55 อยู่อันดับที่ 34 จากทั้งหมด สิ่งที่ทำในกิจกรรมนี้: ระบบถังขยะนิเวศจิ๋วอัจฉริยะในการจัดการขยะที่เชื่อมเทคโนโลยีฮาร์ดแวร์และซอฟต์แวร์ โดยการรีไซเคิลใช้ Ai เพื่อตรวจจับวัตถุผ่าน Ultrasonic ฝั่งผู้ใช้จะมีแผนที่แสดงพิกัดตู้ในสวนโดยใช้เว็บไซต์ เมื่อทิ้งแล้วได้แต้มเข้าโทรศัพท์ผ่านอินเทอร์เน็ต โดยแต้มเอาไปแลกส่วนลดต่างๆ หน้าที่ของผมคือการเป็นหัวหน้าทีม ในการริเริ่มไอเดียและประสานกับเพื่อนร่วมทีมต่างสถาบัน ทำเอกสาร ทำโปสเตอร์แนวตั้งและแนวนอน โดยทีมของผมได้นำเสนอนวัตกรรมตามหลัก SDG 11 , SDG 12 และ SDG 13 สิ่งที่ผมได้เรียนรู้: ผมได้เรียนรู้ทักษะด้าน Soft Skills ในภาวะผู้นำในการทำหน้าที่ของตนเองและคอยดูของเพื่อนร่วมทีมทั้งจัดการด้านวิดีโอและตัวเว็บไซต์ในใช้ HTML โดยทีมผมมีการใช้ AI ในเพื่อการตรวจสอบเพิ่มสิทธิภาพและอธิบายรายละเอียด TypeScript แทนการใช้ JavaScript ของผลงาน'
            , img: 'assets/images/eco2local.jpg'
            , gallery: ['assets/images/eco2local.jpg','assets/images/เกียรติบัตรเหรียญเงิน - CIA2026-153_page-0001.jpg', 'assets/images/CIA26241-Poster1_page-0001.jpg','assets/images/CIA26241-Poster2_page-0001.jpg']
            , video: 'https://drive.google.com/file/d/1LUPYWHCJon4XaUx3Mf6MaM6hF1vIGcKG/view?usp=sharing', rel: 'https://hitoagain.github.io/Eco2Local_example/#top'
            , doc: 'CIA26241Proposal.pdf'},

            { cat: 'competition', title: 'ผ่านการคัดเลือกและได้เข้าร่วมการแข่งขันกังหันลมเพื่อผลิตพลังงานไฟฟ้า ครั้งที่ 2 ประจำปี 2569 [KidWind Challenge in Thailand]'
            , rank: 'ได้คัดเลือกเป็นตัวแทน 70 ทีมจากทั้งหมด 300 ทีม', date: '24 มิถุนายน 2569', location: 'คณะวิทยาศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง (KMITL)', by: 'KidWind Challenge in Thailand 2026'
            , desc: 'กระผมรับหน้าที่จัดการทำเอกสารและรูปเล่มเพื่อนำเสนอกังหันลมที่จำลองก่อนสร้างจริงในการแข่งขัน KidWind Challenge in Thailand และเมื่อผ่านการคัดเลือกผมและเพื่อนได้ช่วยกันออกแบบกังหันลม ตั้งแต่ฐานจนถึงใบพัดหน้าที่ของผมคือการหาวัสดุอุปกรณ์ในการทำฐานโดยผมได้เสนอในการใช้ไม้อัดเป็นฐานและโครงเสาของฐานเป็นเหล็กและตัวใบพัดผมได้ใช้พลาสติก PETG ทำให้ใบพัดมีความแข็งแรงและความเหนียวสูงกลับกันการใช้พลาสติกทำให้ใบพัดมีน้ำหนักที่เบาทำให้หมุนได้ง่ายขึ้น'
            , img: 'assets/images/kidwind1.jpg', gallery: ['assets/images/kidwind1.jpg', 'assets/images/kidwind2.jpg','assets/images/kidwind3.jpg','assets/images/kidwind6.jpg']
            },

            { cat: 'competition', title: 'วัตกรรมเครื่องอำนวยความสะดวก Stable Stairs', rank: 'รองชนะเลิศอันดับ 2', date: '24 มกราคม 2569'
            , location: 'สถาบันสารสาสน์เทคโนโลยีแห่งสุวรรณภูมิ', by: 'สถาบันสารสาสน์เทคโนโลยีแห่งสุวรรณภูมิ คณะศึกษาศาสตร์และศิลปศาสตร์'
            , desc: 'Stable Stairs เป็นราวจับที่ช่วยพยุงผู้สูงอายุเวลาที่ต้องขึ้นหรือลงบันได หน้าที่ของผมคือการนำ AI มาประยุกต์ใช้กับราวจับบันไดผมได้ออกแบบให้มีกล้องเซนเซอร์พร้อมฟังก์ชันตรวจจับการเคลื่อนไหวของผู้สูงอายุเพื่อความปลอดภัยและลดความเสี่ยงจากการหกล้ม'
            , img: 'assets/images/old1.jpg', gallery: ['assets/images/old1.jpg', 'assets/images/old2.jpg', 'assets/images/old3.jpg', 'assets/images/old4.jpg'], slides: 'SteadyStair.pdf'},

            { cat: 'project', title: 'เครื่องจำลองแผ่นดินไหว', rank: 'โครงงานวันวิทยาศาสตร์', date: '13 พฤศจิกายน 2568'
            , location: 'โรงเรียนสารสาสน์ประชาอุทิศพิทยาคาร', by: 'โรงเรียนสารสาสน์ประชาอุทิศพิทยาคาร'
            , desc: '   กระผมได้เป็นหัวหน้าทีม ในการริเริ่มไอเดียโดยการคิดมาจากการเกิดแผ่นดินไหว วันที่ 28 มีนาคม พ.ศ. 2568 ที่ประเทศไทย หน้าที่หลักคือออกแบบสถานที่จำลองแผ่นดินไหว ออกแบบการกระพริบของเสาไฟ การมีเสียงแจ้งเตือนของรถจำลอง , และจัดการเรื่องเอกสารทั้งหมด ได้เรียนรู้กระบวนการทำงานระหว่างฮาร์ดแวร์และซอฟต์แวร์จากการใช้ตัวตรวจจับแรงสั่นสะเทือนเชื่อมต่อกับ ESP32 หน้าที่เป็นประมลผลสัญญาณเมื่อเกิดการสั่นไหว โดยจะใช้การประมวลผลขนาดของเวกเตอร์เพื่อจำลองความรุนแรงของแผ่นดินไหวแบบเรียลไทม์และส่งข้อมูลผ่านอินเทอร์เน็ตแสดงผลไปยังแพลตฟอร์ม Telegram ในรูปแบบลิงก์ข้อมูลแจ้งเตือนทันทีที่เกิดเหตุการณ์พร้อมๆ การควบคุมระบบไฟฟ้าในโมเดลจำลอง เช่น การทำให้เสาไฟกระพริบ , การเปิดเสียงแจ้งเตือนที่ตัวรถจำลอง '
            , img: 'assets/images/แผ่นดินไหว1.jpg', gallery: ['assets/images/แผ่นดินไหว1.jpg', 'assets/images/แผ่นดินไหว2.jpg', 'assets/images/แผ่นดินไหว3.jpg'], doc: 'เครื่องจำลองแผ่นดินไหว .pdf'},

            { cat: 'project', title: 'EXACT AI', rank: 'โครงงานโรงเรียน', date: '22 กันยายน 2569', location: 'โรงเรียนสารสาสน์ประชาอุทิศพิทยาคาร', by: 'โรงเรียนสารสาสน์ประชาอุทิศพิทยาคาร'
            , desc: 'แพลตฟอร์มเพื่อช่วยให้ผู้เรียนทราบถึงเนื้อหาที่ควรพัฒนาเพิ่มเติมในวิชาฟิสิกส์เป็นรายบุคคล เพื่อให้สามารถปรับปรุงพัฒนาได้อย่างตรงจุดและมีประสิทธิภาพผ่านโมเดล EXACT ที่พัฒนาขึ้นภายใต้แนวคิดการเรียนรู้ที่ยึดเป้าหมายของผู้เรียนเป็นสำคัญและมุ่งเน้นการสร้างความเข้าใจในเนื้อหาวิชาการเชิงลึก ดังรายละเอียดต่อไปนี้ E (Establish) คือจุดมุ่งหมายซึ่งเป็นการกำหนดเป้าหมายการเรียนรู้ของผู้เรียนชัดเจน,X (eXamine) คือรวบรวมเนื้อหาการรวบรวมเนื้อหาจากแหล่งอ้างอิงที่ดีที่สุดและมีความน่าเชื่อถือ,A (Action) คือลงมือปฏิบัติการลงมือทำแบบทดสอบที่สร้างขึ้นจากขั้นตอน X โดยถูกควบคุมเนื้อหาตามเป้าหมาย E,C (Confirm) คือการยืนยันผลเป็นกระบวนการตรวจสอบและแสดงผลข้อที่ถูกหรือผิดเพื่อให้ผู้เรียนทราบสถานะปัจจุบัน,T (Transfer) คือการประเมินและแนะแนวผลจากขั้นตอน C แล้วแสดงผลในรูปแบบกราฟวิเคราะห์รายบุคคลพร้อมให้คำแนะนำเพิ่มเติม'
            , img: 'assets/images/iconexact.jpg', gallery: ['assets/images/iconexact.jpg'], video: 'https://drive.google.com/file/d/1QWjUyUpiAbJFOIC1jR9fiyUSMPMtnht5/view?usp=sharing', doc: 'ของเล่นเด็กวัด_Presentation.pdf', rel: 'https://exact-ai-m-6.vercel.app/' },

            { cat: 'selfdev', title: 'My Website Portfolio', rank: 'พัฒนาตัวเอง', date: '27 ตุลาคม 2569 - ปัจจุบัน'
            , desc: 'เป็นเว็บไซต์ของผมที่จะแสดงผลงานทั้งหมดซึ่งแรงบันดาลใจเกิดจากคลิปยูทูบ "ทำยังไงไม่ให้ Portfolio ของเราถูกปัดตกไป คำแนะนำจากอาจารย์ SIT KMUTT" ซึ่งเห็นว่าคณะอาจารย์ได้นำเสนอการทำ Website Portfolio ในการนำเสนอทำให้ผมสนใจอยากลองทำ ตัวเว็บไซต์ผมได้ออกแบบให้มีความคล้ายเว็บไซต์ sit kmutt และผมทำขึ้นมาเพื่อนำเสนอในการใช้ยื่น SIT โดยเฉพาะ หน้าที่ของผม: กระผมพัฒนาเว็บไซต์นี้ด้วยตนเองมีการใช้ AI มาช่วยในการ Vibe Coding และ ช่วยเป็นเครื่องมือในการอธิบาย Code รายละเอียดเพื่อให้ผมสามารถออกแบบ HTML วางโครงเว็บและแบ่ง section , CSS ปรับสีให้เหมาะกับธีมสีของคณะ และ Javascript ในการกำหนดตัวแปรเพื่อแยกหมวดหมู่ของผลงานทั้งหมด ทำให้ตัวผมสามารถใส่ความสร้างสรรค์และพัฒนาตัวเว็บไซต์ให้ใช้งานได้จริง สำหรับผมการใช้ Ai Vibe Coding ทำให้ง่ายต่อการทำงานแต่สุดท้ายผมก็จะต้องมาปรับแก้ด้วยตนเองเพื่อให้เข้ากับงานใช้งาน'
            , img: 'assets/images/iceport.png', gallery: ['assets/images/iceport.png','assets/images/iceport1.png', 'assets/images/iceport2.png', 'assets/images/iceport3.png']
            , rel: 'https://ice-port-portfolio.vercel.app/' ,github: 'https://github.com/hanatrahightsensai-ops/ice-port-portfolio.git'},

            { cat: 'selfdev', title: 'RuneVale!', rank: 'พัฒนาตัวเอง', date: '5 ต.ค.2569 - ปัจจุบัน', location: '', by: 'Myself'
            , desc: 'เกมนีได้รับแรงบันดาลใจจากเกมแนว Steal an Egg โดยเปลียนจากไข่ธรรมดาให้กลายเป็น "ดาบไข่คริสตัล"ในบรรยากาศโลกแฟนตาซีลึกลับทีเต็มไปด้วยคริสตัลซากโบราณสถานและบอสขนาดยักษ์ ผู้เล่นจะต้องออกไปล่าดาบไข่คริสตัลจากมอนเตอร์โลกแฟนตาซีลึกลับทีเต็มไปด้วยคริสตัลซากโบราณสถานและบอสขนาดยักษ์ผู้เล่นจะต้องออกไปล่าดาบไข่คริสตัลจากมอนสเตอร์และบอส จากนันต้องแบกมันฝาอันตรายกลับฐานให้ได้ก่อนจะโดนคนอืนแย่ง เมือนํามาฟักเป็น Hero เพือจากนันต้องแบกมันฝ่าอันตรายกลับฐานให้ได้ก่อนจะโดนคนอืนแย่งเมือนํามาฟักเป็น Hero เพือช่วย ฟาร์มเงินและทรัพยากรแล้ว ก็จะนําของทีได้มาคราฟดาบเล่มใหม่ทีแข็งแกร่งกว่าเดิม สิ่งที่ทำในกิจกรรมนี้: RuneVale! เกมแนว Fantasy Action บน Roblox ผู้เล่นสามารถพัฒนาละครและสะสมความแข็งแกร่งเพื่อสู้กับมอนสเตอร์เพื่อชิงดาบ และนำไปฟักที่ฐานดาบจะเปิดเป็น Unit ที่ช่วยสู้ตัวมอนเตอร์ในฐานตัวเอง โดยหน้าที่หลักของผมคือช่วงแรกออกแบบ UI ปุ่มกดและสามารถตอบสนองได้รวมถึงการสร้างไอคอนไอเทม และคัตซีนเนื้อเรื่องก่อนเข้าเกม ระบบสอนผู้เล่นผู้ใหม่ แต่ช่วงหลังผมได้หน้าที่หลักเป็น Developer ในการแก้ไขและปรับสมดุลของเกม สิ่งที่ผมได้เรียนรู้: ได้ทำเกมใน Roblox Studio ซึ่งเป็นความฝันในวัยเด็กของตนเองและทักษะการเขียนโค้ดในภาษา Lua รวมถึงการทำงานแบบ Logical Thinking โดยใช้ Obsidian'
            , img: 'assets/images/RuneVale!1.png', gallery: ['assets/images/RuneVale!1.png', 'assets/images/RuneVale!2.png']
            , video: 'https://drive.google.com/file/d/12gqmcjoBRJYVkopdbxYmtZ-PwoQorckE/view?usp=sharing'
            , doc: 'https://runevale-garden.vercel.app'
            , rel: 'https://www.roblox.com/games/98409365965858/RuneVale' },

             { cat: 'selfdev', title: 'ผลการเรียนดีเด่น', rank: 'เหรียญทองแดง', date: '13 พฤศจิกายน 2569', location: 'โรงเรียนสารสาสน์ประชาอุทิศพิทยาคาร', by: 'โรงเรียนสารสาสน์ประชาอุทิศพิทยาคาร'
            , desc: 'กระผมได้รับเกียรติบัตรในโครงการ Top Ten เนื่องจากมีผลการเรียนดีเด่นในระดับเหรียญทองแดงได้ผลการเรียนเฉลี่ย:3.45'
            , img: 'assets/images/เรียนดีเด่น.jpg', gallery: ['assets/images/เรียนดีเด่น.jpg']
            },

            { cat: 'selfdev', title: 'การแข่งขันทักษะทางไซเบอร์ Cyber Hero นครเชียงราย CTF', rank: 'ตัวแทนโรงเรียนสารสาสน์ประชาอุทิศพิทยาคาร', date: '12 กันยายน 2569', location: 'รูปแบบออนไลน์', by: 'การรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ'
            , desc: 'กระผมได้เป็น 1 ใน 3 ตัวแทนของโรงเรียนในการแข่งขัน Cybersecurity ในระดับมัธยมศึกษา เป็นการแข่งขันรูปแบบออนไลน์และ เป็นประสบการณ์ที่เปิดโลกในเรียนรู้ทักษะทางไซเบอร์ของผมอย่างมาก โดยโจทย์จะให้หา Flag ที่ซ่อนอยู่ในเว็บไซต์ ไฟล์ และ สามารถใช้ AI ได้เพื่อเป็นเครื่องมือช่วยในการวิเคราะห์ข้อมูล แต่ต้องเขียน Solution ทุกข้อเพื่ออธิบายคำตอบที่ได้มา สำหรับตัว ผมถือว่ามีความกดดันมากเพราะกลัวเป็นภาระต่อเพื่อนร่วมทีมแต่ในการแข่งขันจริงได้เจอปัญหามากมายทั้งเว็บล่ม ทำให้ผมได้เรียนรู้ทักษะการแก้ปัญหาเฉพาะหน้า และการเป็นผู้นำเพื่อปลุกกำลังใจให้เพื่อนร่วมทีมแข่งต่อเพราะต้องแข่งขันต่อเนื่อง 9 ชั่วโมง ถึงแม้ว่าจะได้แค่เข้าร่วมแต่ประสบการณ์นี้ทำให้ตัวผมได้เรียนรู้การใช้ AI เพื่อช่วยแต่ก็ต้องใช้คนในตรวจสอบและตัดสินใจด้วยตัวเองอยู่ดี'
            , img: 'assets/images/ctfcertificate.jpg', gallery: ['assets/images/ctfcertificate.jpg']
            },

            { cat: 'selfdev', title: 'ได้ระดับ ดีเด่น สาขาวิชาวิศวกรรมอิเล็กทรอนิกส์และระบบคอมพิวเตอร์', rank: 'ค่ายอัจฉริยภาพวิศวศิลปากร', date: '23-24 ตุลาคม 2569', location: 'รูปแบบออนไลน์', by: 'คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม มหาวิทยาลัยศิลปากร'
            , desc: 'ได้รับระดับ "ดีเด่น" จากค่ายอัจฉริยภาพวิศวศิลปากร ภาควิชาวิศวกรรมไฟฟ้า ได้เรียนและลงมือทำวงจรไฟฟ้าพื้นฐาน วงจรดิจิทัลกับลอจิกเกต การจำลองวงจร LED ใน Tinkercad และ IoT กับไมโครคอนโทรลเลอร์ ค่ายนี้ใช้รับเข้าสาขาวิศวกรรมอิเล็กทรอนิกส์และระบบคอมพิวเตอร์ / ไฟฟ้าสื่อสาร ปีการศึกษา 2570'
            , img: 'assets/images/sucertificate.jpg', gallery: ['assets/images/sucertificate.jpg']
            },

            { cat: 'selfdev', title: 'Loop2Local', rank: 'พัฒนาตัวเอง', date: '4 พฤภาคม 2569', location: '', by: ''
            , desc: 'กระผมรับหน้าที่ได้ทำการสอบถามคนในชุมชนสามย่าน เกี่ยวกับปัญหาขยะเดลิเวอรี่เป็นฟอร์มจำนวน 56 คน และจัดการฟอร์มเอกสารและสไลด์พรีเซนเทชั่น สิ่งได้เรียนรู้: ได้เรียนรู้การทำงานร่วมกับเพื่อนต่างสถาบัน เกี่ยวกับการสร้างแพลตฟอร์มเรียนรู้ระบบ IoT กับเพื่อนที่มีความถนัดด้านต่างๆมาปรับใช้ให้เข้ากับความถนัดของเรา และการนำเทคโนโลยีมาแก้ปัญหาการปรับเปลี่ยนพฤติกรรมผู้บริโภคด้วยระบบแรงจูงใจ สะท้อนปัญหาเรื่องขยะในการกำจัดการจัดการวัตถุดิบให้เกิดประสิทธิภาพสูงสุด การลดอุปสรรคเรื่องความยุ่งยากในการคัดแยก นำเสนอสิ่งที่จับต้องได้จริง ช่วยลดปริมาณขยะและยังเป็นการเพิ่มคุณค่าให้กับวัสดุเหลือใช้เพื่อสนับสนุนมูลนิธิในชุมชน ได้เรียนรู้การทำงานร่วมกับเพื่อนต่างสถาบัน เกี่ยวกับการสร้างแพลตฟอร์มเรียนรู้ระบบ IoT กับเพื่อนที่มีความถนัดด้านต่างๆมาปรับใช้ให้เข้ากับความถนัดของเรา และการนำเทคโนโลยีมาแก้ปัญหาการปรับเปลี่ยนพฤติกรรมผู้บริโภคด้วยระบบแรงจูงใจ สะท้อนปัญหาเรื่องขยะในการกำจัดการจัดการวัตถุดิบให้เกิดประสิทธิภาพสูงสุด การลดอุปสรรคเรื่องความยุ่งยากในการคัดแยก นำเสนอสิ่งที่จับต้องได้จริง ช่วยลดปริมาณขยะและยังเป็นการเพิ่มคุณค่าให้กับวัสดุเหลือใช้เพื่อสนับสนุนมูลนิธิในชุมชน '
            , img: 'assets/images/Loop2Local.jpg', gallery: ['assets/images/Loop2Local.jpg','assets/images/loop2local1.png','assets/images/loop2local2.png','assets/images/loop2local3.png']
            , video: 'https://youtu.be/2_apxhDK_No?si=-skGvJ0EYgGhk3ob' , doc: 'https://drive.google.com/file/d/1jHm1zwtcJR3DcoacpQecZfdrNxmbLR6u/view' , rel: 'https://loop2local.vercel.app/'     , github: 'https://github.com/hanatrahightsensai-ops/loop2local'
            },


            { cat: 'selfdev', title: 'Bin to Bite', rank: 'พัฒนาตัวเอง', date: '1 เมษายน 2569', location: '', by: ''
            , desc: 'Bin to Bite เป็นถังขยะอัจฉริยะที่เอาหนอนแมลงวันลาย (BSF) มาย่อยเศษอาหาร ใช้ Arduino กับเซนเซอร์ DHT11 คุมอุณหภูมิ 27–35°C และความชื้น 60–70% RH แบบอัตโนมัติผ่านพัดลม ฮีตเตอร์ และหัวพ่นไอน้ำ ลดขยะอินทรีย์ได้ แล้วยังได้ตัวหนอนไปเป็นอาหารสัตว์กับมูลหนอนไปทำปุ๋ย ส่งเข้าแข่ง ENVI Mahidol-School Hackathon ของคณะสิ่งแวดล้อมและทรัพยากรศาสตร์ ม.มหิดล'
            , img: 'assets/images/Bin2Bite.png', gallery: ['assets/images/Bin2Bite.png','assets/images/Bin2Bite1.png']
            , rel: 'Bin to Bite.pdf'
            },

            { cat: 'selfdev', title: 'แพลตฟอร์มดิจิทัลตรวจสอบย้อนกลับและบริหารจัดการเศษฟิล์มพอลิเมอร์เหลือใช้ เพื่อขับเคลื่อนเศรษฐกิจหมุนเวียนในอุตสาหกรรมกระจกลามิเนตสู่การพัฒนาฟิล์มอัจฉริยะ', rank: 'พัฒนาตัวเอง', date: '', location: '', by: ''
            , desc: 'เป็นหัวหน้าทีมทำแพลตฟอร์มดิจิทัลติดตามเศษฟิล์ม PVB ที่เหลือจากโรงงานกระจกลามิเนตแบบย้อนกลับได้ (ใช้ QR Code, เซนเซอร์ IoT, เว็บไซต์ที่ต่อกับ Google Forms + Apps Script และ Dashboard) เพื่อเอาเศษฟิล์มไปรีไซเคิลเป็นฟิล์มอัจฉริยะตามหลักเศรษฐกิจหมุนเวียน ส่งเข้าประกวด Science & Technology Idea Contest หัวข้อ "วิศวกรรมเชิงหมุนเวียน"'
            , img: 'assets/images/smartlamined3.png', gallery: ['assets/images/smartlamined3.png','assets/images/smartlamined.png','assets/images/smartlamined1.png','assets/images/smartlamined2.png'] ,doc:'https://drive.google.com/file/d/1m4r2ixqFyamJ95CfRhfv31drxAlp5QKs/view?usp=sharing',video:'https://drive.google.com/drive/u/0/folders/1_m-EMYwdQNTKlXs-HY6Sv_iHZWBL_-Tx', rel: 'https://smart-laminated-glass.vercel.app'
            },

            { cat: 'camp', title: 'SIT CAMP 2026 | Gateway of Discovery', rank: 'ค่าย', date: '25-27 เมษายน 2569'
            , location: ' มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี', by: 'คณะเทคโนโลยีสารสนเทศ (SIT) มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี'
            , desc: 'สิ่งที่ทำในกิจกรรมนี้: ผมเป็น 1 ใน 32 คนที่ผ่านการคัดเลือกเข้าไปในค่าย SIT CAMP ในตลอดระยะเวลา 3 วัน 1 คืน โดยในวันแรก ผมได้เรียนรู้การพัฒนาเว็บไซต์ตั้งแต่การร่าง Wireframe ของ Website Portfolio การจัดเรียงสัดส่วนและแบ่งหมวดหมู่หัวข้อกับเพื่อนในค่าย รุ่นพี่มีการแนะแนวการสัมภาษณ์ในแต่ละโครงการ รวมถึงการใช้สอนใช้ Figma ในการออกแบบ UX/UI ในวันที่ 2 ผมได้เรียนรู้ทักษะการเขียน HTML , CSS , JavaScript ไปจนถึง Git และแพลตฟอร์ม GitHub และมีการทำโปรเจกต์เพื่อไปนำเสนอวันที่ 3 เป็นการสร้างเว็บไซต์แรกของตัวผมและมีโจทย์กำหนดเป็นธีมพลังงาน  หน้าที่หลักของผมคือการเขียน JavaScript เป็นสิ่งที่ท้าทายสำหรับตัวผม นอกจากนี้ผมยังได้ทักษะการฝึกทำงานร่วมกับผู้อื่น ในวันที่ 3 ผมและทีมทำเว็บไซต์ให้สามารถใช้งานได้ และนำเสนอผลงานแก่คณะอาจารย์ ซึ่งได้รับฟังทั้งชมและสิ่งที่ต้องพัฒนาเพิ่มเติม โดยท้ายที่สุดทีมของผมได้รับรางวัลรองชนะเลิศอันดับ 1  สิ่งที่ผมได้เรียนรู้: ผมได้เรียนรู้ทักษะการเขียน HTML , CSS , JavaScript ทำให้ผมสามารถทำ Website Portfolio ของตนเองและยังเรียนรู้ทักษะการใช้แพลตฟอร์ม Github ในการเก็บโค้ดและเรียนรู้การใช้ Vercel นอกจากนี้ผมยังได้สนิทสนมกับเพื่อนในค่าย พากันไปแข่งขันและพูดคุยกันจนถึงปัจจุบัน '
            , img: 'assets/images/sitcamp1.jpg', gallery: ['assets/images/sitcamp1.jpg','assets/images/sitcamp3.jpg','assets/images/sitcamp4.jpg','assets/images/SITCAMP11.jpg']
            , video: 'https://youtu.be/2Uhh3Pc_fWk',doc:'https://www.sit.kmutt.ac.th/sitcamp2026/' },

            { cat: 'camp', title: 'Nano Camp 2026', rank: 'ค่าย', date: '13 พฤษภาคม 2569', location: 'จุฬาลงกรณ์มหาวิทยาลัย'
            , by: 'International School of Engineering Chulalongkorn University'
            , desc: 'เข้าร่วม NANOCAMP 3 International School of Engineering , Chulalongkorn University'
            , img: 'assets/images/nanocamp1.jpg', gallery: ['assets/images/nanocamp1.jpg', 'assets/images/nanocampcertificate.jpg']},


            { cat: 'camp', title: 'อนาคตอุตสาหกรรมไฟฟ้าไทย ความสมดุลสู่ความยั่งยืน', rank: 'ค่าย', date: '29 ตุลาคม 2569', location: 'ณ ศูนย์พัฒนาสิ่งประดิษฐ์เพื่ออนาคตและความยั่งยืน วช.', by: 'สำนักงานการวิจัยแห่งชาติ (วช.)'
            , desc: 'สำนักงานการวิจัยแห่งชาติร่วมกับการไฟฟ้าฝ่ายผลิตได้จัดกิจกรรมอบรมเกี่ยวกับอุตสาหกรรมการไฟฟ้าในไทยให้กับเยาวชน สิ่งที่ผมได้รับ คือ ความรู้เบื้องต้นด้านอุตสาหกรรมการไฟฟ้าในประเทศไทย เช่น หน่วยงานที่จำหน่ายไฟฟ้า และประเภทของเครื่องผลิตไฟฟ้า'
            , img: 'assets/images/ไฟฟ้า1.jpg', gallery: ['assets/images/ไฟฟ้า1.jpg', 'assets/images/วชcertificate.jpg','assets/images/ไฟฟ้า2.jpg','assets/images/ไฟฟ้า3.jpg']},

            { cat: 'camp', title: 'SPU ENGINEERING CAMP 2026', rank: 'ค่าย', date: '26 - 27 มีนาคม 2569', location: 'มหาวิทยาศรีปทุม', by: 'คณะวิศวกรรมศาสตร์ มหาวิทยาศรีปทุม'
            , desc: 'ได้เข้าร่วมโครงการ “SPU ENGINEERING CAMP 2026"'
            , img: 'assets/images/spucertificate.jpg', gallery: ['assets/images/spucertificate.jpg', 'assets/images/spu1.jpg', 'assets/images/spu2.jpg','assets/images/spu3.jpg']},

            { cat: 'camp', title: 'TEP-TEPE Pre-Engineering Workshop 2025 Computer Engineering Workshop', rank: 'ค่าย', date: '6 กรกฏาคม 2568', location: 'คณะวิศวกรรมศาสตร์ มหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต', by: 'โครงการ TEP-TEPE คณะวิศวกรรมศาตร์ มหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต'
            , desc: 'เข้าร่วมค่าย TEP-TEPE Pre-Engineering Workshop 2025 Computer Engineering Workshop Thammasat University'
            , img: 'assets/images/tucertificate.jpg', gallery: ['assets/images/tucertificate.jpg', 'assets/images/tu1.jpg','assets/images/tu3.jpg']},

            { cat: 'camp', title: 'First Camp Pathway 2026', rank: 'ค่าย', date: '29 สิงหาคม 2569', location: 'สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง', by: 'School of Engineering'
            , desc: 'สิ่งที่ทำในกิจกรรมนี้: กระผมเข้าค่ายหลักสูตรนานาชาติคณะวิศวกรรมศาสตร์ของสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบังได้ผมเลือกเรียนหลักสูตร Computer Engineering และ Software Engineering เพราะมีความสนใจด้าน Coding ซึ่งผมได้เรียนรู้ทักษะการเขียน Python เบื้องต้นในโปรแกรม Visual Studio Code ความท้าทายของหลักสูตรนานาชาติคือรุ่นพี่จะนำเสนอการสอนเป็นภาษาอังกฤษทำให้เวลาผมสงสัยหรือต้องการถามคำถามรุ่นพี่ต้องสื่อสารเป็นภาษาอังกฤษ และในค่ายนี้ผมยังได้เจอเพื่อนในค่าย SIT CAMP จึงได้พูดคุยกันเรื่องมหาวิทยาลัยในฝันและการยื่นโครงการ Active Recruitment คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี สิ่งที่ผมได้เรียนรู้: ผมได้เรียนรู้ทักษะการเขียน Python แบบพื้นฐานการแก้โจทย์ปัญหาทางคณิตศาสตร์โดยใช้ Python และความกล้าในสื่อสารภาษาอังกฤษกับรุ่นพี่ รวมถึงแรงจูงใจเดินทางตามความฝันของตัวเอง'
            , img: 'assets/images/kmitlcertificate.jpg', gallery: ['assets/images/kmitlcertificate.jpg', 'assets/images/kmitl1.jpg','assets/images/kmitl2.jpg']},

            { cat: 'camp', title: 'BIONEDICAL ENGINEERING YOUTH CAMP', rank: 'ค่าย', date: '3 เมษายน 2569', location: 'มหาวิทยาลัยรังสิต', by: 'คณะวิศวกรรมชีวการแพทย์ มหาวิทยาลัยรังสิต '
            , desc: 'เข้าร่วมค่าย BIONEDICAL ENGINEERING YOUTH CAMP คณะวิศวกรรมชีวการแพทย์ มหาวิทยาลัยรังสิต'
            , img: 'assets/images/bionedicalcertificate.jpg', gallery: ['assets/images/bionedicalcertificate.jpg', 'assets/images/bio1.jpg']},

            { cat: 'camp', title: 'WORKSHOP ON COMPUTER VISION GAME', rank: 'ค่าย', date: '27 ตุลาคม 2569', location: 'THAI-NICHI INSTITUTE OF TECHNOLOGY', by: 'FACULTY OF INFORMATION TECHNOLOGY THAI-NICHI INSTITUTE OF TECHNOLOGY'
            , desc: 'กระผมได้เป็น 1 ใน 10 คนที่เข้าร่วมการทำ workshop ของคณะสารสนเทศ สถาบันเทคโนโลยีไทย-ญี่ปุ่น ได้สอนการใช้ Library Mediapipe ในภาษา Python และการประยุกต์ใช้เคลื่อนไหวในการเล่นเกมโดยจับผ่าน Webcam ซึ่งผมได้รับโจทย์ให้ทำเกมในการนำเสนอสไตล์ตัวเอง แรงบันดาลใจเกิดจากผมชอบดูบอลเลยได้ทำเกมเก็บคะแนนโดยตัวละครจะเป็นนักฟุตบอลจากทีม Real Madrid ที่ร่วงลงมาให้เก็บคะแนนหากผู้เล่นเก็บนักฟุตบอลที่อยู่ทีมอื่นคะแนนจะลบ สามารถขยับการเคลื่อนไหวผ่านนิ้วของตัวเราเปรียบเสมือนเมาส์ ผมได้รับไอเดียในการประยุกต์สร้างเกมและเป็นครั้งแรกของผมในการใช้ Library Mediapipe '
            , img: 'assets/images/ไทยญี่ปุ่นcertificate.jpg', gallery: ['assets/images/ไทยญี่ปุ่นcertificate.jpg', 'assets/images/th-jp1.jpg','assets/images/th-jp2.jpg']
            , rel: 'https://www.facebook.com/share/p/19vmj94C7a/'},

            { cat: 'camp', title: 'Robotics and Al Fromtier Camp 2026', rank: 'ค่าย', date: '9-10 เมษายน 2569', location: 'รูปแบบออนไลน์', by: 'ภาควิชาหุ่นยนต์และปัญญาประดิษฐ์ คณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง'
            , desc: 'อบรม Robotics and Al Fromtier Camp 2026 คณะวิศวกรรมศาสตร์ ภาควิชาหุ่นยนตร์และปัญญาประดิษฐ์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง'
            , img: 'assets/images/robotcertificate.png', gallery: ['assets/images/robotcertificate.png']},

            { cat: 'camp', title: 'BU Open House 2025 หัวข้อ "Next-Gen Full-Stack: Integrating Al into Modern Web ', rank: 'OPEN HOUSE', date: '29 - 30 สิงหาคม 2568', location: 'มหาวิทยาลัยกรุงเทพ', by: 'คณะเทคโนโลยีสารสนเทศและนวัตกรรม มหาวิทยาลัยกรุงเทพ'
            , desc: 'เข้าร่วม Bu Open House 2025 หัวข้อ “Next-Gen Full-Stack” คณะเทคโนโลยีสารสนเทศ'
            , img: 'assets/images/bucertificate.jpg', gallery: ['assets/images/bucertificate.jpg']},

            { cat: 'camp', title: 'K-Engineering World Tour and Workshop 2025', rank: 'OPEN HOUSE', date: '3 สิงหาคม 2568', location: 'สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง', by: 'คณะวิศวกรรมศาสตร์สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง'
            , desc: 'เข้าร่วม K-Engineering World Tour and Workshop 2025'
            , img: 'assets/images/kengineeingcertificate.jpg', gallery: ['assets/images/kengineeingcertificate.jpg']},

            { cat: 'camp', title: 'MAHIDOL ENGINEERING OPEN HOUSE 2025', rank: 'OPEN HOUSE', date: '3 สิงหาคม 2568', location: 'มหาลัยมหิดลศาลายา', by: 'คณะวิศวกรรมศาสตร์ มหาวิทยาลัยมหิดล'
            , desc: 'เข้าร่วม MAHIDOL ENGINEERING OPEN HOUSE 2025 คณะวิศวกรรมศาสตร์ มหาวิทยาลัยมหิดล'
            , img: 'assets/images/mahidolcertificate.jpg', gallery: ['assets/images/mahidolcertificate.jpg']},

            { cat: 'camp', title: 'โครงการ INTANIA OPEN HOUSE 2026', rank: 'OPEN HOUSE', date: '6 กันยายน 2568', location: 'จุฬาลงกรณ์มหาวิทยาลัย', by: 'คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย'
            , desc: 'ได้เข้าร่วมงาน IΝΤΑΝΙΑ OPEN HOUSE 2026 และทํากิจกรรม หาความรู้อย่างเหมาะสม ณ คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย'
            , img: 'assets/images/INTANIAcertificate.jpg', gallery: ['assets/images/INTANIAcertificate.jpg']},

            { cat: 'camp', title: 'Jkonwledge THAILAND UNIVERSITY TCAS EXPO 2025 คณะ เวิศวกรรมศาสตร์', rank: 'ค่าย', date: '19 กรกฎาคม 2568', location: 'มหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต', by: 'สถาบันวิชาการ เจ โนว์เลจ'
            , desc: 'เข้าร่วม Jkonwledge THAILAND UNIVERSITY TCAS EXPO 2025 คณะ วิศวกรรมศาสตร์'
            , img: 'assets/images/jknow1.jpg', gallery: ['assets/images/jknow1.jpg']},

            { cat: 'camp', title: 'Jkonwledge THAILAND UNIVERSITY TCAS EXPO 2025 คณะ เทคโนโลยีสารสนเทศ', rank: 'ค่าย', date: '19 กรกฎาคม 2568', location: 'มหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต', by: 'สถาบันวิชาการ เจ โนว์เลจ'
            , desc: 'เข้าร่วม Jkonwledge THAILAND UNIVERSITY TCAS EXPO 2025 คณะ เทคโนโลยีสารสนเทศ'
            , img: 'assets/images/jknow2.jpg', gallery: ['assets/images/jknow2.jpg']},

            { cat: 'volunteer', title: 'บริจาคโลหิต'
            , rank: 'บริจาคโลหิต', date: '28 กรกฎาคม 2569', location: 'โรงเรียนรักษาดินแดน ศูนย์การนักศึกษาวิชาทหาร (ศูนย์ใหญ่ รด.)'
            , by: 'หน่วยบัญชาการรักษาดินแดน'
            , desc: 'กระผมได้มีโอกาสในการบริจาคโลหิตเพื่อชาติ เพื่อถวายเป็นพระราชกุศาลแด่พระบาทสมเด็จพระเจ้าอยู่หัว เนื่องในโอกาสวันเฉลิมพระพรรษา 28 กรกฎาคม 2569 และเพื่อช่วยเหลือผู้ป่วยที่ต้องการโลหิตในโรงพยาบาลต่าง ๆ'
            , img: 'assets/images/รดบริจาคโลหิต.jpg'
            , gallery: ['assets/images/รดบริจาคโลหิต.jpg']},

            { cat: 'volunteer', title: 'จิตอาสา ณ โรงพยาบาลเจริญกรุงประชารักษ์', rank: 'จิตอาสา'
            , date: '9-10 กันยายน 2568', location: 'โรงพยาบาลเจริญกรุงประชารักษ์', by: 'ชมรมอาสาสมัครโรงพยาบาลเจริญกรุงประชารักษ์'
            , desc: 'กระผมได้มีโอกาสร่วมเป็นทีมจิตอาสา ณ โรงพยาบาลเจริญกรุงประชารักษ์ได้เรียนรู้ทักษะการปฏิบัติงานจริงในสถานการณ์ที่มีความท้าทายช่วยเหลือผู้ป่วยและผู้ที่เสี่ยงโรคในช่วงสถานการณ์ COVID-19 แยกจำแนกผู้ป่วยตรวจความดันน้ำหนักส่วนสูงโดยมีพี่จิตอาสาค่อยช่วยเหลือและยังค่อยช่วยพยาบาลคัดแยกยาสำหรับจำหน่ายผู้ป่วยเป็นเวลาจำนวน2วัน และทางโรงพยาบาลเจริญกรุงประชารักษ์ได้พาไปดูมูลนิธิวิธีการจัดการขยะพลาสติกเป็นการรีไซเคิลนำไปเป็นจีวรพระและเครื่องเรือน เสื้อผ้า หรือเฟอร์นิเจอร์'
            , img: 'assets/images/จิตอาสา5.jpg', gallery: ['assets/images/จิตอาสา5.jpg', 'assets/images/จิตอาสา4.jpg','assets/images/จิตอาสา1.jpg','assets/images/จิตอาสา3.jpg','assets/images/จิตอาสา2.jpg'],},

            { cat: 'volunteer', title: 'กิจกรรมปฐมนิเทศรับน้อง', rank: 'ปฐมนิเทศ', date: '27 พฤษภาคม 2569', location: 'หอประชุม ณ โรงเรียนสารสาสน์ประชาอุทิศพิทยาคาร', by: 'โรงเรียนสารสาสน์ประชาอุทิศพิทยาคาร'
            , desc: 'กระผมได้เป็นตัวแทน 1 ใน 10 คนการจัดกิจกรรมปฐมนิเทศรับน้องสู่รั้วสารสาสน์มัธยมศึกษาชั้นปีที่4 และ มัธยมศึกษาชั้นปีที่1'
            , img: 'assets/images/ปฐมนิเทศ1.jpg'
            , gallery: ['assets/images/ปฐมนิเทศ1.jpg', 'assets/images/ปฐมนิเทศ2.jpg','assets/images/ปฐมนิเทศ3.jpg']
            , rel: 'https://www.facebook.com/share/p/1bNZHmraZa/'},

            { cat: 'volunteer', title: 'อาคารและสถานที่', rank: 'จิตอาสา', date: '9 มกราคม 2569', location: 'โรงเรียนสารสาสน์ประชาอุทิศพิทยาคาร', by: 'โรงเรียนสารสาสน์ประชาอุทิศพิทยาคาร'
            , desc: 'ได้รับหน้าที่ตรวจสอบอาคารและสถานที่ '
            , img: 'assets/images/อาคาร1.jpg'
            , gallery: ['assets/images/อาคาร1.jpg']}
            ];
            function renderGridCards() {
            const grid = document.getElementById('projectsGrid');
            if (!grid) return;
            grid.innerHTML = '';
            itemsData.forEach((item, index) => {
                const card = document.createElement('div');
                card.className = 'item-card glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col group cursor-pointer';
                card.setAttribute('data-category', item.cat);
                card.onclick = () => openModalByIndex(index);
                card.innerHTML = `
                    <div class="relative h-48 overflow-hidden bg-slate-900">
                        <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                        <span class="absolute top-3 right-3 bg-purple-600/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-purple-400/30">
                            ${item.rank}
                        </span>
                    </div>
                    <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div class="space-y-2">
                            <h3 class="font-bold text-white text-base group-hover:text-black-300 transition">${item.title}</h3>
                            <p class="text-xs text-gray-300 line-clamp-2 leading-relaxed">${item.desc}</p>
                        </div>
                        <div class="pt-2 flex items-center justify-between border-t border-white/10 text-black-400 text-xs font-semibold">
                            <span>ดูรายละเอียดเพิ่มเติม</span> <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
            filterCategory('all');
        }
        function filterCategory(cat) {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                if (btn.getAttribute('data-cat') === cat) {
                    btn.classList.add('border-purple-400', 'bg-white/10', 'text-white');
                    btn.classList.remove('border-white/10');
                } else {
                    btn.classList.remove('border-purple-400', 'bg-white/10', 'text-white');
                    btn.classList.add('border-white/10');
                }
            });
            document.querySelectorAll('.item-card').forEach(card => {
                if (cat === 'all' || card.getAttribute('data-category') === cat) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }
        const detailModal = document.getElementById('detailModal');
        const modalContent = document.getElementById('modalContent');
        const modalFeaturedImage = document.getElementById('modalFeaturedImage');
        const modalFeaturedButton = document.getElementById('modalFeaturedButton');
        const galleryContainer = document.getElementById('modalGallery');
        const lightbox = document.getElementById('imageLightbox');
        const lightboxImage = document.getElementById('lightboxImage');
        const lightboxPrev = document.getElementById('lightboxPrev');
        const lightboxNext = document.getElementById('lightboxNext');
        const lightboxClose = document.getElementById('lightboxClose');
        let currentGalleryImages = [];
        let currentGalleryIndex = 0;
        function normalizeGalleryImages(item) {
            const gallery = Array.isArray(item.gallery) && item.gallery.length ? item.gallery : [];
            const fallback = item.img ? [item.img] : [];
            return gallery.length ? gallery : fallback;
        }
        function updateGalleryDisplay() {
            if (!currentGalleryImages.length) {
                modalFeaturedImage.src = '';
                modalFeaturedImage.alt = 'No gallery image';
                lightboxImage.src = '';
                return;
            }
            const currentImage = currentGalleryImages[currentGalleryIndex] || currentGalleryImages[0];
            modalFeaturedImage.src = currentImage;
            modalFeaturedImage.alt = 'Featured project';
            lightboxImage.src = currentImage;

            galleryContainer.innerHTML = '';
            currentGalleryImages.forEach((url, index) => {
                const thumb = document.createElement('button');
                thumb.type = 'button';
                thumb.className = `relative flex-shrink-0 w-24 h-20 overflow-hidden rounded-xl border transition ${index === currentGalleryIndex ? 'border-cyan-400 ring-2 ring-cyan-400/40' : 'border-white/10'}`;
                thumb.innerHTML = `<img src="${url}" alt="Gallery image ${index + 1}" class="w-full h-full object-cover">`;
                thumb.addEventListener('click', () => {
                    currentGalleryIndex = index;
                    updateGalleryDisplay();
                });
                galleryContainer.appendChild(thumb);
            });
        }
        function openLightbox() {
            if (!currentGalleryImages.length) return;
            lightbox.classList.remove('hidden');
            lightbox.classList.add('flex');
            lightboxImage.src = currentGalleryImages[currentGalleryIndex] || currentGalleryImages[0];
            lightboxImage.style.transform = 'scale(1)';
            lightboxImage.style.cursor = 'zoom-in';
        }
        function closeLightbox() {
            lightbox.classList.add('hidden');
            lightbox.classList.remove('flex');
        }
        function moveGallery(step) {
            if (!currentGalleryImages.length) return;
            currentGalleryIndex = (currentGalleryIndex + step + currentGalleryImages.length) % currentGalleryImages.length;
            updateGalleryDisplay();
            lightboxImage.src = currentGalleryImages[currentGalleryIndex];
        }
        function toggleLinkButton(buttonId, value) {
            const button = document.getElementById(buttonId);
            if (!button) return;
            const hasValue = !!value && value.trim() !== '';
            button.style.display = hasValue ? 'inline-flex' : 'none';
            if (hasValue) button.href = value;
        }

        function syncRelatedLinksVisibility(item) {
            const linkButtons = [
                'modalVideoLink',
                'modalDocLink',
                'modalSlidesLink',
                'modalRelLink',
                'modalGithubBtn'
            ];

            const visibleButtons = linkButtons.filter((id) => {
                const button = document.getElementById(id);
                return button && button.style.display !== 'none';
            });

            const relatedLinksLabel = document.getElementById('relatedLinksLabel');
            const relatedLinksContainer = document.getElementById('relatedLinksContainer');
            const wrap = document.getElementById('relatedLinksWrap');

            if (wrap) {
                wrap.style.display = visibleButtons.length ? 'block' : 'none';
            }
            if (relatedLinksLabel) {
                relatedLinksLabel.style.display = visibleButtons.length ? 'block' : 'none';
            }
            if (relatedLinksContainer) {
                relatedLinksContainer.style.display = visibleButtons.length ? 'flex' : 'none';
            }
        }

        function openModalByIndex(index) {
            const item = itemsData[index];
            if (!item) return;

            currentGalleryImages = normalizeGalleryImages(item);
            currentGalleryIndex = 0;

            document.getElementById('modalTitle').textContent = item.title;
            document.getElementById('modalDesc').textContent = item.desc;
            document.getElementById('modalDate').textContent = item.date;
            document.getElementById('modalLocation').textContent = item.location;
            document.getElementById('modalBy').textContent = item.by;
            document.getElementById('modalImageBadge').textContent = item.rank;

            document.getElementById('modalBadges').innerHTML = `
                <span class="bg-purple-600/80 text-white text-xs font-bold px-3 py-1 rounded-full">${item.rank}</span>
                <span class="glass text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-500/30 uppercase">${item.cat}</span>
            `;

            updateGalleryDisplay();

            toggleLinkButton('modalVideoLink', item.video);
            toggleLinkButton('modalDocLink', item.doc);
            toggleLinkButton('modalSlidesLink', item.slides);
            toggleLinkButton('modalRelLink', item.rel);
            toggleLinkButton('modalGithubBtn', item.github);
            syncRelatedLinksVisibility(item);

            detailModal.classList.remove('hidden');
            setTimeout(() => {
                detailModal.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
                modalContent.classList.add('scale-100');
            }, 10);
        }        function closeDetailModal() {
            detailModal.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            setTimeout(() => {
                detailModal.classList.add('hidden');
            }, 300);
            closeLightbox();
        }
        modalFeaturedButton.addEventListener('click', openLightbox);
        lightboxClose.addEventListener('click', closeLightbox);
        lightboxPrev.addEventListener('click', () => moveGallery(-1));
        lightboxNext.addEventListener('click', () => moveGallery(1));
        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) closeLightbox();
        });
        lightboxImage.addEventListener('click', () => {
            if (!currentGalleryImages.length) return;
            const currentScale = lightboxImage.dataset.scale === '2' ? 1 : 2;
            lightboxImage.dataset.scale = String(currentScale);
            lightboxImage.style.transform = `scale(${currentScale})`;
            lightboxImage.style.cursor = currentScale > 1 ? 'zoom-out' : 'zoom-in';
        });
        document.addEventListener('keydown', (event) => {
            if (lightbox.classList.contains('flex')) {
                if (event.key === 'Escape') closeLightbox();
                if (event.key === 'ArrowLeft') moveGallery(-1);
                if (event.key === 'ArrowRight') moveGallery(1);
            }
        });
        function initParticles() {
            const canvas = document.getElementById('particleCanvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            function resize() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            resize();
            window.addEventListener('resize', resize);
            const particles = [];
            for (let i = 0; i < 50; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5 + 0.5,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.4,
                    alpha: Math.random() * 0.5 + 0.2
                });
            }
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                particles.forEach(p => {
                    p.x += p.vx; p.y += p.vy;
                    if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
                    if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(82, 137, 170, ${p.alpha})`;
                    ctx.fill();
                });
                requestAnimationFrame(animate);
            }
            animate();
        }
        const typingText = document.getElementById('typing-text');
        if (typingText) {
            const phrases = ['ธนโชค ฉิมมาลี (ไอซ์)', 'ลูกพระจอมบางมด'];
            let phraseIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            function typeLoop() {
                const currentPhrase = phrases[phraseIndex];
                const currentText = currentPhrase.slice(0, charIndex);
                typingText.textContent = currentText;
                if (!isDeleting && charIndex < currentPhrase.length) {
                    charIndex += 1;
                    setTimeout(typeLoop, 90);
                    return;
                }
                if (!isDeleting && charIndex === currentPhrase.length) {
                    isDeleting = true;
                    setTimeout(typeLoop, 1200);
                    return;
                }
                if (isDeleting && charIndex > 0) {
                    charIndex -= 1;
                    setTimeout(typeLoop, 45);
                    return;
                }
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(typeLoop, 250);
            }
            typeLoop();
        }
        renderGridCards();
        initParticles();
