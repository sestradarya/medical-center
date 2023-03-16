document.getElementById("navigation").innerHTML = `
            <a href="../../../index.html">
                <div class="logo">
                    <img src="../../img/logo-green.png" class="logo-image" alt="">
                    <h1 class="logo-text">Chamomile</h1>
                </div>
            </a>
            <nav class="site-navigation">
                <input id="menu-toggle" type="checkbox" />
                <label class='menu-button-container' for="menu-toggle">
                    <div class='menu-button'></div>
                </label>
                <ul class="menu">
                    <li>
                        <a href="./about-us.html">О нас</a>
                        <ul class="dropdown first">
                            <li><a href="./about-us.html">О нас</a></li>
                            <li><a href="./about-us-doctors.html">Врачи</a></li>
                            <li><a href="./about-us-pricelist.html">Прайс-лист</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="./services.html">Услуги</a>
                        <ul class="dropdown second">
                            <li><a href="./services-dermatology.html">Дерматология</a></li>
                            <li><a href="./services-alergology.html">Алергология</a></li>
                            <li><a href="./services-venerology.html">Венерология</a></li>
                            <li><a href="./services-cosmetology.html">Косметология</a></li>
                            <li><a href="./services-trichology.html">Трихология</a></li>
                            <li><a href="./services-podology.html">Подология</a></li>
                        </ul>
                    </li>
                    <li><a href="./contacts.html">Контакты</a> </li>
                    <li><a href="./reviews.html">Отзывы</a> </li>
                </ul>
            </nav>`;
