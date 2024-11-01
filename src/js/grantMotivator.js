function getDuplex(){
    let bodyDuplex = document.createElement('div');
        bodyDuplex.className = 'page-item__motivator';
        bodyDuplex.innerHTML = `
        <svg width="213" height="30" viewBox="0 0 213 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 3C0 1.34315 1.34315 0 3 0H177V30H3C1.34315 30 0 28.6569 0 27V3Z" fill="#FF7647"/>
        <path d="M23.417 10.708H18.9531V19H16.9023V9.04688H23.417V10.708ZM27.7441 19C27.653 18.8223 27.5869 18.6012 27.5459 18.3369C27.0674 18.8701 26.4453 19.1367 25.6797 19.1367C24.9551 19.1367 24.3535 18.9271 23.875 18.5078C23.401 18.0885 23.1641 17.5599 23.1641 16.9219C23.1641 16.138 23.4535 15.5365 24.0322 15.1172C24.6156 14.6979 25.4564 14.486 26.5547 14.4814H27.4639V14.0576C27.4639 13.7158 27.375 13.4424 27.1973 13.2373C27.0241 13.0322 26.7484 12.9297 26.3701 12.9297C26.0374 12.9297 25.7754 13.0094 25.584 13.1689C25.3971 13.3285 25.3037 13.5472 25.3037 13.8252H23.3281C23.3281 13.3968 23.4603 13.0003 23.7246 12.6357C23.9889 12.2712 24.3626 11.9863 24.8457 11.7812C25.3288 11.5716 25.8711 11.4668 26.4727 11.4668C27.3841 11.4668 28.1064 11.6969 28.6396 12.1572C29.1774 12.613 29.4463 13.2555 29.4463 14.085V17.291C29.4508 17.9928 29.5488 18.5238 29.7402 18.8838V19H27.7441ZM26.1104 17.626C26.402 17.626 26.6709 17.5622 26.917 17.4346C27.1631 17.3024 27.3454 17.127 27.4639 16.9082V15.6367H26.7256C25.7367 15.6367 25.2103 15.9785 25.1465 16.6621L25.1396 16.7783C25.1396 17.0244 25.2262 17.2272 25.3994 17.3867C25.5726 17.5462 25.8096 17.626 26.1104 17.626ZM37.6221 15.3701C37.6221 16.5094 37.3623 17.4232 36.8428 18.1113C36.3278 18.7949 35.6305 19.1367 34.751 19.1367C34.0036 19.1367 33.3997 18.877 32.9395 18.3574V21.8438H30.9639V11.6035H32.7959L32.8643 12.3281C33.3428 11.7539 33.9671 11.4668 34.7373 11.4668C35.6488 11.4668 36.3574 11.804 36.8633 12.4785C37.3691 13.153 37.6221 14.0827 37.6221 15.2676V15.3701ZM35.6465 15.2266C35.6465 14.5384 35.5234 14.0075 35.2773 13.6338C35.0358 13.2601 34.6826 13.0732 34.2178 13.0732C33.598 13.0732 33.1719 13.3102 32.9395 13.7842V16.8125C33.181 17.3001 33.6117 17.5439 34.2314 17.5439C35.1748 17.5439 35.6465 16.7715 35.6465 15.2266ZM43.1387 19C43.0475 18.8223 42.9814 18.6012 42.9404 18.3369C42.4619 18.8701 41.8398 19.1367 41.0742 19.1367C40.3496 19.1367 39.748 18.9271 39.2695 18.5078C38.7956 18.0885 38.5586 17.5599 38.5586 16.9219C38.5586 16.138 38.848 15.5365 39.4268 15.1172C40.0101 14.6979 40.8509 14.486 41.9492 14.4814H42.8584V14.0576C42.8584 13.7158 42.7695 13.4424 42.5918 13.2373C42.4186 13.0322 42.1429 12.9297 41.7646 12.9297C41.432 12.9297 41.1699 13.0094 40.9785 13.1689C40.7917 13.3285 40.6982 13.5472 40.6982 13.8252H38.7227C38.7227 13.3968 38.8548 13.0003 39.1191 12.6357C39.3835 12.2712 39.7572 11.9863 40.2402 11.7812C40.7233 11.5716 41.2656 11.4668 41.8672 11.4668C42.7786 11.4668 43.501 11.6969 44.0342 12.1572C44.5719 12.613 44.8408 13.2555 44.8408 14.085V17.291C44.8454 17.9928 44.9434 18.5238 45.1348 18.8838V19H43.1387ZM41.5049 17.626C41.7965 17.626 42.0654 17.5622 42.3115 17.4346C42.5576 17.3024 42.7399 17.127 42.8584 16.9082V15.6367H42.1201C41.1312 15.6367 40.6048 15.9785 40.541 16.6621L40.5342 16.7783C40.5342 17.0244 40.6208 17.2272 40.7939 17.3867C40.9671 17.5462 41.2041 17.626 41.5049 17.626ZM52.7705 19H50.7881V16.1562H48.334V19H46.3584V11.6035H48.334V14.5703H50.7881V11.6035H52.7705V19ZM60.4404 13.1895H58.0684V19H56.0859V13.1895H53.7549V11.6035H60.4404V13.1895ZM65.8955 11.6035H67.8711V19H65.8955V14.4336L63.4209 19H61.4385V11.6035H63.4209V16.1631L65.8955 11.6035ZM75.5479 11.6035V19H73.5791V16.4434H72.3281L70.9062 19H68.9033L70.5166 16.1084C70.0745 15.9033 69.7327 15.6253 69.4912 15.2744C69.2542 14.9235 69.1357 14.5247 69.1357 14.0781C69.1357 13.3626 69.4115 12.777 69.9629 12.3213C70.5189 11.861 71.2617 11.6217 72.1914 11.6035H75.5479ZM72.2256 15.0625H73.5791V13.1895H72.2939C71.943 13.1895 71.6582 13.2829 71.4395 13.4697C71.2207 13.652 71.1113 13.8753 71.1113 14.1396C71.1113 14.404 71.2161 14.6227 71.4258 14.7959C71.6354 14.9691 71.902 15.0579 72.2256 15.0625ZM87.1348 11.6035V19H85.1592V13.2031H83.416L83.293 15.4863C83.2155 16.7031 82.9762 17.5895 82.5752 18.1455C82.1742 18.7015 81.5771 18.9863 80.7842 19H80.1143L80.0938 17.3936L80.3398 17.373C80.6953 17.3457 80.9551 17.1361 81.1191 16.7441C81.2832 16.3522 81.3857 15.6846 81.4268 14.7412L81.5635 11.6035H87.1348ZM91.4209 16.2041L92.7881 11.6035H94.9072L91.9336 20.1484L91.7695 20.5381C91.3275 21.5042 90.5983 21.9873 89.582 21.9873C89.2949 21.9873 89.0033 21.944 88.707 21.8574V20.3604L89.0078 20.3672C89.3815 20.3672 89.6595 20.3102 89.8418 20.1963C90.0286 20.0824 90.1745 19.8932 90.2793 19.6289L90.5117 19.0205L87.9209 11.6035H90.0469L91.4209 16.2041ZM101.921 19H99.9453V16.6758C99.5762 16.7441 99.2321 16.7783 98.9131 16.7783C97.7965 16.7783 96.9557 16.5413 96.3906 16.0674C95.8255 15.5934 95.5384 14.9007 95.5293 13.9893V11.6035H97.5049V13.9893C97.5094 14.4176 97.6143 14.7253 97.8193 14.9121C98.0244 15.0944 98.389 15.1855 98.9131 15.1855C99.2412 15.1855 99.5853 15.1468 99.9453 15.0693V11.6035H101.921V19ZM105.414 11.6035V17.4072H107.444V11.6035H109.427V17.4072H111.457V11.6035H113.433V19H103.438V11.6035H105.414ZM118.423 19.1367C117.338 19.1367 116.454 18.804 115.771 18.1387C115.091 17.4733 114.752 16.5869 114.752 15.4795V15.2881C114.752 14.5452 114.896 13.8822 115.183 13.2988C115.47 12.7109 115.875 12.2598 116.399 11.9453C116.928 11.6263 117.53 11.4668 118.204 11.4668C119.216 11.4668 120.011 11.7858 120.59 12.4238C121.173 13.0618 121.465 13.9665 121.465 15.1377V15.9443H116.755C116.819 16.4274 117.01 16.8148 117.329 17.1064C117.653 17.3981 118.061 17.5439 118.553 17.5439C119.314 17.5439 119.909 17.2682 120.337 16.7168L121.308 17.8037C121.011 18.223 120.61 18.5511 120.104 18.7881C119.599 19.0205 119.038 19.1367 118.423 19.1367ZM118.197 13.0664C117.805 13.0664 117.486 13.1986 117.24 13.4629C116.999 13.7272 116.844 14.1055 116.775 14.5977H119.523V14.4404C119.514 14.0029 119.396 13.6657 119.168 13.4287C118.94 13.1872 118.617 13.0664 118.197 13.0664ZM127.05 11.6035H129.025V19H127.05V14.4336L124.575 19H122.593V11.6035H124.575V16.1631L127.05 11.6035ZM128.212 8.60254C128.212 9.20866 127.993 9.69857 127.556 10.0723C127.123 10.446 126.553 10.6328 125.847 10.6328C125.14 10.6328 124.568 10.4482 124.131 10.0791C123.698 9.70996 123.481 9.21777 123.481 8.60254H124.883C124.883 8.88965 124.967 9.11296 125.136 9.27246C125.309 9.42741 125.546 9.50488 125.847 9.50488C126.143 9.50488 126.375 9.42741 126.544 9.27246C126.713 9.11296 126.797 8.88965 126.797 8.60254H128.212ZM134.022 11.6035H135.998V17.4072H138.473V11.6035H140.455V17.4209H141.562L141.426 21.1943H139.587V19H134.022V11.6035ZM145.958 19.1367C144.873 19.1367 143.989 18.804 143.306 18.1387C142.627 17.4733 142.287 16.5869 142.287 15.4795V15.2881C142.287 14.5452 142.431 13.8822 142.718 13.2988C143.005 12.7109 143.41 12.2598 143.935 11.9453C144.463 11.6263 145.065 11.4668 145.739 11.4668C146.751 11.4668 147.546 11.7858 148.125 12.4238C148.708 13.0618 149 13.9665 149 15.1377V15.9443H144.29C144.354 16.4274 144.545 16.8148 144.864 17.1064C145.188 17.3981 145.596 17.5439 146.088 17.5439C146.849 17.5439 147.444 17.2682 147.872 16.7168L148.843 17.8037C148.547 18.223 148.146 18.5511 147.64 18.7881C147.134 19.0205 146.573 19.1367 145.958 19.1367ZM145.732 13.0664C145.34 13.0664 145.021 13.1986 144.775 13.4629C144.534 13.7272 144.379 14.1055 144.311 14.5977H147.059V14.4404C147.049 14.0029 146.931 13.6657 146.703 13.4287C146.475 13.1872 146.152 13.0664 145.732 13.0664ZM156.54 19H154.558V16.1562H152.104V19H150.128V11.6035H152.104V14.5703H154.558V11.6035H156.54V19ZM160.184 13.7705H161.599C162.237 13.7705 162.797 13.8776 163.28 14.0918C163.763 14.306 164.132 14.6136 164.388 15.0146C164.647 15.4111 164.777 15.8737 164.777 16.4023C164.777 17.1816 164.488 17.8105 163.909 18.2891C163.335 18.763 162.551 19 161.558 19H158.201V11.6035H160.184V13.7705ZM167.922 19H165.946V11.6035H167.922V19ZM160.184 15.3564V17.4209H161.585C161.977 17.4209 162.278 17.3298 162.487 17.1475C162.697 16.9652 162.802 16.7168 162.802 16.4023C162.802 16.0833 162.699 15.8304 162.494 15.6436C162.289 15.4521 161.986 15.3564 161.585 15.3564H160.184ZM171.675 15.9443H170.034L169.802 9.04688H171.907L171.675 15.9443ZM170.854 17.0244C171.187 17.0244 171.454 17.1224 171.654 17.3184C171.859 17.5143 171.962 17.765 171.962 18.0703C171.962 18.3711 171.859 18.6195 171.654 18.8154C171.454 19.0114 171.187 19.1094 170.854 19.1094C170.526 19.1094 170.26 19.0114 170.055 18.8154C169.854 18.6195 169.754 18.3711 169.754 18.0703C169.754 17.7695 169.854 17.5212 170.055 17.3252C170.26 17.1247 170.526 17.0244 170.854 17.0244Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M198.302 0H177V30H198.357C198.963 30 199.545 29.7604 199.982 29.3313L212.278 17.2634C213.214 16.3449 213.244 14.8246 212.345 13.8686L199.994 0.736539C199.551 0.26595 198.94 0 198.302 0ZM191.085 19.2C193.678 19.2 195.78 17.051 195.78 14.4C195.78 11.749 193.678 9.6 191.085 9.6C188.492 9.6 186.39 11.749 186.39 14.4C186.39 17.051 188.492 19.2 191.085 19.2Z" fill="#FF7647"/>
        </svg>`;
    return bodyDuplex;
}

Array.from(document.getElementsByClassName('item_room__image')).forEach(e => {
    if(e.classList[1] === 'duplex') {
        e.parentElement.parentElement.classList.add('duplex');
        e.parentElement.parentElement.prepend(getDuplex());
    }  
});