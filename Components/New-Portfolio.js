
        // const menu =  document.querySelector('.menu')
        // const menulist = document.querySelector('header_links a')  
        // menu.addEventListener('click',()=>{
        //     menulist .classList.add('showmenu');

        // })
        const menu = document.querySelector(".header_links");
        const menuItems = document.querySelectorAll("nav a");
        const hamburger= document.querySelector(".hamburger");
        const closeIcon= document.querySelector(".closeIcon");
        const menuIcon = document.querySelector(".menuIcon");
        
        function toggleMenu() {
          if (menu.classList.contains("showMenu")) {
            menu.classList.remove("showMenu");
            closeIcon.style.display = "none";
            menuIcon.style.display = "block";
          } else {
            menu.classList.add("showMenu");
            closeIcon.style.display = "block";
            menuIcon.style.display = "none";
          }
        }
        
        hamburger.addEventListener("click", toggleMenu);