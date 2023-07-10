import { h } from "preact";
import { Link } from "preact-router";

import PageWrapper from "../PageWrapper";

export default () => {
  const crumb = {
    current: { text: "Home" },
  };

  return (
    <PageWrapper breadcrumbLinks={[crumb.current]} titleText="Home">
      <div class="mega-row cms-row vertical-spacing-bottom">
        <div class="container container-small">
          <div class="row">
            <div class="col col-sm-12">
              <div class="guides noresize">
                <div class="guides-wrapper custom-guides-wrapper">
                  <div class="guides-element custom-guides-element span-6">
                    <div class="small-tule small-tule--light small-tule--image-link">
                      <Link href="/courses" class="small-tule-wrapper">
                        <div class="small-tule-container">
                          <div class="small-tule--custom-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 640 512">
                              <path fill="currentColor" d="M438.9 132.1c-2.3 3.8-7.2 5-11 2.8-3.8-2.3-5-7.2-2.8-11l72-120.016c2.3-3.789 7.2-5.017 11-2.744s5 7.187 2.8 10.98l-72 119.98zM255.1 16c-61 0-112 50.14-112 112 0 4.4-2.7 8-8 8-3.5 0-8-3.6-8-8 0-70.69 58.2-128 128-128C326.7 0 384 57.31 384 128c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-61.86-50.1-112-112.9-112zM320 189.3l247.8-35.4c10.9-1.6 21.5 4.5 25.6 14.8l33.2 83c7.2 17.9-3 38-22.5 42.9l-166.8 43.5c-16.5 4.2-33.8-2.3-43.3-16.4l-74-110-74.9 110c-8.6 14.1-25.9 20.6-42.4 16.4L35.04 294.6c-18.66-4.9-28.839-25-21.68-42.9l33.21-83a23.901 23.901 0 0 1 25.68-14.8L320 189.3zM28.22 257.7c-3.58 8.9 1.51 19 10.84 21.4l167.64 43.5c9.9 2.5 19.4-1.4 26-9.9l73.5-109.3-236.22-33.7c-3.65-.5-7.19 1.5-8.56 4.9l-33.2 83.1zm305.58-54.3 73.5 109.3c5.7 8.5 16.1 12.4 26 9.9l167.6-43.5c9.4-2.4 14.5-12.5 10.9-21.4l-33.2-83.1c-1.4-3.4-4.9-5.4-8.6-4.9l-236.2 33.7zM560 336.1l16-4.5v78.9c0 22-15 41.2-36.4 46.6l-208 52c-8.5 1.9-15.6 1.9-23.2 0l-208-52c-21.41-5.4-37.3-24.6-37.3-46.6v-78.9l16 4.5v74.4c0 14.7 10.89 27.5 25.1 31.1l206.9 51.9V296c0-4.4 4.5-8 8-8 5.3 0 8.9 3.6 8.9 8v197.5l207.8-51.9C550 438 560 425.2 560 410.5v-74.4z"></path>
                            </svg>
                          </div>
                          <div class="small-tule-content">
                            <p class="small-tule-title small-tule--custom-title">Erstellen Sie Ihren eigenen Kurs von Grund auf</p>
                            <p class="small-tule-button small-tule--custom-button">&nbsp;</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div class="guides-element custom-guides-element span-6">
                    <div class="small-tule small-tule--light small-tule--image-link">
                      <Link href="/packs" class="small-tule-wrapper">
                        <div class="small-tule-container">
                          <div class="small-tule--custom-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 576 512">
                              <path fill="currentColor" d="M15.1 416c0 26.5 22.39 48 48 48h221.4c3.6 5.6 7.5 10.9 11.7 16H64c-35.35 0-64-28.7-64-64V189.6c0-9 1.879-17.8 5.516-26L47.11 70.01C57.38 46.89 80.3 32 105.6 32h236.8c25.3 0 48.2 14.9 58.5 38.01l41.6 93.59c3.6 8.2 5.5 17 5.5 26v2.4H16l-.9 224zm216-240H430c-.6-2.9-1.3-4-2.1-5.9l-41.6-93.59C378.6 59.17 361.4 48 342.4 48H231.1v128zm-16-128H105.6c-18.98 0-36.17 11.17-43.87 28.51L20.14 170.1c-.86 1.9-1.59 3-2.18 5.9H215.1V48zm286.6 274.3c3.1 3.2 3.1 8.2 0 11.4l-80 80a8.15 8.15 0 0 1-11.4 0l-48-48a8.15 8.15 0 0 1 0-11.4c3.2-3.1 8.2-3.1 11.4 0l42.3 42.4 74.3-74.4c3.2-3.1 8.2-3.1 11.4 0zM287.1 368c0-79.5 65.4-144 144.9-144s144 64.5 144 144-64.5 144-144 144-144.9-64.5-144.9-144zM432 496c70.7 0 128-57.3 128-128s-57.3-128-128-128-128 57.3-128 128 57.3 128 128 128z"></path>
                            </svg>
                          </div>
                          <div class="small-tule-content">
                            <p class="small-tule-title small-tule--custom-title">Beginnen Sie mit einem unserer vorgefertigten Kurse</p>
                            <p class="small-tule-button small-tule--custom-button">&nbsp;</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
