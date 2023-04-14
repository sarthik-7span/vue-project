<template>
  <header class="section-header">
    <div class="container">
      <div class="header">
        <div class="header__logo" onclick="hello()">
          <img src="../static/img/logo.png" alt="logo ">
        </div>
        <div class="header__action">
          <div class="header__buttons">
            <a href="javascript:;">Book A Tour</a>
            <a href="javascript:;">Get started</a>
          </div>
          <div class="header__connect">
            <div class="connect-image">
              <img src="../static/icon/profile.svg" alt="profile-icon">
            </div>

          </div>
          <div class="header__search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929L20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z"
                fill="white" />
            </svg>
          </div>
          <div class="header__menu">
            <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8.33333H12.9014M1 1H23M1 15.6667H23" stroke="white" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>