import { h } from 'preact';

export default ({ text }) => (
  <div class="mega-row cms-row bg-grey-full vertical-spacing-bottom">
    <div class="container">
      <div class="row">
        <div class="col col-sm-12">
          <div class="text-element noresize">
            <h1 class="title-lvl-1">{text}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);
