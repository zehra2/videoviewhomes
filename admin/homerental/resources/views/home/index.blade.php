@extends('master.inner-header')
@section('content')



<main id="pt-pageContent">
    <div class="container-indent nomargin">
        <div class="mainSlider-layout">
            <div class="mainSliderSlick mainSliderSlick-js arrow-slick-main">
                <div class="slide">
                    <div class="img--holder">
                        <picture>
                            <source srcset="{{ url('assets/')}}images/slides-12/slide-01-sm.webp" media="(max-width: 767px)"
                                type="image/webp">
                            <source srcset="{{ url('assets/')}}images/slides-12/slide-01-sm.jpg" media="(max-width: 767px)"
                                type="image/jpg">
                            <source srcset="{{ url('assets/')}}images/slides-12/slide-01-md.webp" media="(max-width: 1024px)"
                                type="image/webp">
                            <source srcset="{{ url('assets/')}}images/slides-12/slide-01-md.jpg" media="(max-width: 1024px)"
                                type="image/jpg">
                            <source srcset="{{ url('assets/')}}images/slides-12/slide-01.webp" type="image/webp">
                            <source srcset="{{ url('assets/')}}images/slides-12/slide-01.jpg" type="image/jpg">
                            <img src="{{ url('assets/')}}images/slides-12/slide-01.webp" alt="">
                        </picture>
                    </div>
                    <div class="slide-content text-center">
                        <div class="pt-container">
                            <div class="tp-caption1-wd-1 pt-white-color">NEW PERSONALIZABLE COLLECTION</div>
                            <div class="tp-caption1-wd-2 pt-white-color">Find Your New<br>Favorite Clothing</div>
                            <div class="tp-caption1-wd-3 pt-white-color">Keep perfect time with the contemporary,
                                expertly-crafted designs </div>
                            <div class="tp-caption1-wd-4"><a href="listing-left-column.html" target="_blank" class="btn"
                                    data-text="DISCOVER NOW!">DISCOVER NOW!</a></div>
                        </div>
                    </div>
                </div>
                <div class="slide">
                    <div class="img--holder">
                        <picture>
                            <source srcset="{{ url('assets/')}}images/slides-12/slide-02-sm.webp" media="(max-width: 767px)"
                                type="image/webp">
                            <source srcset="{{ url('assets/')}}images/slides-12/slide-02-sm.jpg" media="(max-width: 767px)"
                                type="image/jpg">
                            <source srcset="{{ url('assets/')}}images/slides-12/slide-02-md.webp" media="(max-width: 1024px)"
                                type="image/webp">
                            <source srcset="{{ url('assets/')}}images/slides-12/slide-02-md.jpg" media="(max-width: 1024px)"
                                type="image/jpg">
                            <source srcset="{{ url('assets/')}}images/slides-12/slide-02.webp" type="image/webp">
                            <source srcset="{{ url('assets/')}}images/slides-12/slide-02.jpg" type="image/jpg">
                            <img src="{{ url('assets')}}/images/slides-12/slide-02.webp" alt="">
                        </picture>
                    </div>
                    <div class="slide-content text-center">
                        <div class="pt-container" data-animation="fadeInUpSm" data-animation-delay="0s">
                            <div class="tp-caption1-wd-1 pt-white-color">NEED-IT-NOW</div>
                            <div class="tp-caption1-wd-2 pt-white-color">Must-Haves<br>for the Season</div>
                            <div class="tp-caption1-wd-3 pt-white-color">Contemporary, minimal and beautifully iconic.
                            </div>
                            <div class="tp-caption1-wd-4"><a href="listing-left-column.html" target="_blank" class="btn"
                                    data-text="Discover Now!">DISCOVER NOW!</a></div>
                        </div>
                    </div>
                </div>
                <div class="slide">
                    <div class="img--holder">
                        <picture>
                            <source srcset="{{ url('assets')}}/images/slides-12/slide-03-sm.webp" media="(max-width: 767px)"
                                type="image/webp">
                            <source srcset="{{ url('assets')}}/images/slides-12/slide-03-sm.jpg" media="(max-width: 767px)"
                                type="{{ url('assets/')}}image/jpg">
                            <source srcset="{{ url('assets')}}images/slides-12/slide-03-md.webp" media="(max-width: 1024px)"
                                type="image/webp">
                            <source srcset="{{ url('assets')}}/images/slides-12/slide-03-md.jpg" media="(max-width: 1024px)"
                                type="image/jpg">
                            <source srcset="{{ url('assets')}}/images/slides-12/slide-03.webp" type="image/webp">
                            <source srcset="{{ url('assets')}}/images/slides-12/slide-03.jpg" type="image/jpg">
                            <img src="{{ url('assets')}}/images/slides-12/slide-03.webp" alt="">
                        </picture>
                    </div>
                    <div class="slide-content pt-point-h-r">
                        <div class="pt-container" data-animation="fadeInRightSm" data-animation-delay="0s">
                            <div class="tp-caption1-wd-1 pt-white-color">DON'T MISS TODAY'S FEATURED DEALS</div>
                            <div class="tp-caption1-wd-2 pt-white-color">Get up to<br>50% Off</div>
                            <div class="tp-caption1-wd-3 pt-white-color">Here to bring your life style to the next
                                level.</div>
                            <div class="tp-caption1-wd-4"><a href="listing-left-column.html" target="_blank" class="btn"
                                    data-text="DISCOVER NOW!">DISCOVER NOW!</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="pt-offset-small container-indent">
        <div class="container-fluid">
            <div class="pt-layout-promo-box">
                <div class="row">
                    <div class="col-sm-6">
                        <a href="#" class="pt-promo-box">
                            <div class="image-box">
                                <img src="{{ url('assets')}}/images/promo/index12-promo-01.jpg" alt="">
                            </div>
                            <div class="pt-description pr-promo-type2">
                                <div class="pt-description-wrapper text-center">
                                    <div class="pt-color-white pt-title-small"><span>COMPLETE YOUR LOOK</span></div>
                                    <div class="pt-color-white pt-title-large"><span>Women’s</span></div>
                                    <p class="pt-color-white">Here to bring your life style to the next level.</p>
                                    <div class="btn">DISCOVER NOW!</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-6">
                        <a href="#" class="pt-promo-box">
                            <div class="image-box">
                                <img src="{{ url('assets')}}/images/promo/index12-promo-02.jpg" alt="">
                            </div>
                            <div class="pt-description pr-promo-type2">
                                <div class="pt-description-wrapper text-center">
                                    <div class="pt-color-white pt-title-small"><span>TOP TRENDING STYLES</span></div>
                                    <div class="pt-color-white pt-title-large"><span>Men’s</span></div>
                                    <p class="pt-color-white">Distinguished. Individual. Character.</p>
                                    <div class="btn">DISCOVER NOW!</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="pt-offset-small container-indent">
        <div class="container-fluid no-gutters">
            <div class="pt-promo-fullwidth pt-promo-parallax bg-position-right"
                style="background-image: url(images/promo/index12-promo-03.jpg);">
                <div class="pt-description text-center">
                    <div class="pt-description-wrapper">
                        <div class="pt-color-white pt-title-small">NEW PERSONALIZABLE COLLECTION</div>
                        <div class="pt-color-white pt-title-large">Find Your New<br>Favorite Shorts</div>
                        <p class="pt-color-white">Keep perfect time with the contemporary, expertly-crafted designs </p>
                        <a href="#" class="btn btn-xl btn-dark">SHOP NOW!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="pt-offset-small container-indent">
        <div class="container-fluid">
            <div class="pt-layout-promo-box">
                <div class="row">
                    <div class="col-sm-6">
                        <a href="#" class="pt-promo-box">
                            <div class="image-box">
                                <img src="{{ url('assets')}}/images/promo/index12-promo-04.jpg" alt="">
                            </div>
                            <div class="pt-description pr-promo-type2">
                                <div class="pt-description-wrapper text-center">
                                    <div class="pt-color-white pt-title-small"><span>COMPLETE YOUR LOOK</span></div>
                                    <div class="pt-color-white pt-title-large"><span>Women’s</span></div>
                                    <p class="pt-color-white">Here to bring your life style to the next level.</p>
                                    <div class="btn">DISCOVER NOW!</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-6">
                        <a href="#" class="pt-promo-box">
                            <div class="image-box">
                                <img src="{{ url('assets')}}/images/promo/index12-promo-05.jpg" alt="">
                            </div>
                            <div class="pt-description pr-promo-type2">
                                <div class="pt-description-wrapper text-center">
                                    <div class="pt-color-white pt-title-small"><span>COMPLETE YOUR LOOK</span></div>
                                    <div class="pt-color-white pt-title-large"><span>Men’s</span></div>
                                    <p class="pt-color-white">Here to bring your life style to the next level.</p>
                                    <div class="btn">DISCOVER NOW!</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="pt-offset-small container-indent">
        <div class="container-fluid no-gutters">
            <div class="pt-promo-fullwidth pt-promo-parallax bg-position-left"
                style="background-image: url(images/promo/index12-promo-06.jpg);">
                <div class="pt-description text-center">
                    <div class="pt-description-wrapper">
                        <div class="pt-color-white pt-title-small">NEW PERSONALIZABLE COLLECTION</div>
                        <div class="pt-color-white pt-title-large">Find Your New<br>Favorite Shorts</div>
                        <p class="pt-color-white">Keep perfect time with the contemporary, expertly-crafted designs </p>
                        <a href="#" class="btn btn-xl">DISCOVER NOW!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>




@endsection