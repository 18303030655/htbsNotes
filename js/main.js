$(function(){
    var mobile   = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    var touchstart = mobile ? "touchstart" : "mousedown";
    var touchend = mobile ? "touchend" : "mouseup";
    var touchmove = mobile ? "touchmove" : "mousemove";
    //阻止屏幕滑动
    $('html,body').on(touchmove,function(e){
        e.preventDefault()
    });

    var sound_1 = document.getElementById('sound_1');
    var isWritten=false;
    var isHandleComplete=false;
    var First=true;
    var isStop=false;

    //loading
    var loadAnimation=new TimelineMax();
    loadAnimation.add(TweenMax.to('.p1-1',2,{x:200,ease:Linear.easeNone,onStart:function() {
        TweenMax.to('.p1-1',.15,{y:20,ease:Linear.easeNone,yoyo:true,repeat:-1})
        TweenMax.to('.p1-2',2,{x:210,ease:Linear.easeNone})
    },onComplete:function() {
        TweenMax.to('.p1-1',0,{y:50,x:40,ease:Linear.easeNone})
        TweenMax.to('.p1-1',1.5,{y:50,x:150,ease:Linear.easeNone,onStart:function() {
            TweenMax.to('.p1-1',.15,{y:70,ease:Linear.easeNone,yoyo:true,repeat:-1})
            TweenMax.to('.p1-3',2,{x:150,ease:Linear.easeNone})
        },onComplete:function() {
            TweenMax.to('.p1-1',0,{y:50,x:150,ease:Linear.easeNone})
            isWritten=true;
            if (isHandleComplete) {
                $('.loading').fadeOut();
                initPageMotion();
            }
        }})
    }}))
    loadAnimation.pause();

    var i=1
    setInterval(function() {
        i++;
        if(i%2==0){
            $('.p5-4-2').hide();
        }else{
            $('.p5-4-2').show();
        }
    },500)
       //预加载图片,音乐
    var loadingPath='images/';
    var manifest=[
        {src:loadingPath+'musicicon.png'},
        {src:loadingPath+'p1-1.png'},
         {src:loadingPath+'bg1.jpg'},
        // {src:loadingPath+'bg.mp3'},
        // {src:loadingPath+'share.jpg'},
        {src:loadingPath+'bg2.jpg'},
        {src:loadingPath+'bg3.jpg'},
        {src:loadingPath+'bg33.jpg'},
        {src:loadingPath+'bg4.jpg'},
        {src:loadingPath+'bg5.jpg'},
        {src:loadingPath+'bg6.jpg'},
        {src:loadingPath+'bg7.jpg'},
        {src:loadingPath+'bg8.jpg'},
        {src:loadingPath+'bg9.jpg'},
        {src:loadingPath+'bg10.jpg'},
        {src:loadingPath+'bg11.jpg'},
        {src:loadingPath+'bg12.jpg'},
        {src:loadingPath+'bg13.jpg'},
        {src:loadingPath+'bg14.jpg'},
        {src:loadingPath+'bg15.jpg'},
        {src:loadingPath+'bg_last.jpg'},
        {src:loadingPath+'f1.png'},
        {src:loadingPath+'f2.png'},
        {src:loadingPath+'f3.png'},
        {src:loadingPath+'f4.png'},
        {src:loadingPath+'f5.png'},
        {src:loadingPath+'f6.png'},
        {src:loadingPath+'f7.png'},
        {src:loadingPath+'f8.png'},
        {src:loadingPath+'f9.png'},
        {src:loadingPath+'fanye.png'},
        {src:loadingPath+'fanye2.png'},
        {src:loadingPath+'font1.png'},
        {src:loadingPath+'font2.png'},
        {src:loadingPath+'font3.png'},
        {src:loadingPath+'font4.png'},
        {src:loadingPath+'font5.png'},
        {src:loadingPath+'font6.png'},
        {src:loadingPath+'font7.png'},
        {src:loadingPath+'font8.png'},
        {src:loadingPath+'font9.png'},
        {src:loadingPath+'font10.png'},
        {src:loadingPath+'font11.png'},
        {src:loadingPath+'font12.png'},
        {src:loadingPath+'list1.png'},
        {src:loadingPath+'list2.png'},
        {src:loadingPath+'list3.png'},
        {src:loadingPath+'list4.png'},
        {src:loadingPath+'long_btn.png'},
        {src:loadingPath+'p2-1.png'},
        {src:loadingPath+'p2-2.png'},
        {src:loadingPath+'p2-3.png'},
        {src:loadingPath+'p2-4.png'},
        {src:loadingPath+'p3-1.png'},
        {src:loadingPath+'p3-2.png'},
        {src:loadingPath+'p3-3.png'},
        {src:loadingPath+'p3-4.png'},
        {src:loadingPath+'p3-5.png'},
        {src:loadingPath+'p3-6.png'},
        {src:loadingPath+'p3-7.png'},
        {src:loadingPath+'p3-8.png'},
        {src:loadingPath+'p4-1.png'},
        {src:loadingPath+'p4-2.png'},
        {src:loadingPath+'p4-3.png'},
        {src:loadingPath+'p4-4.png'},
        {src:loadingPath+'p4-5.png'},
        {src:loadingPath+'p4-6.png'},
        {src:loadingPath+'p4-7.png'},
        {src:loadingPath+'p4-8.png'},
        {src:loadingPath+'p4-9.png'},
        {src:loadingPath+'p4-10.png'},
        {src:loadingPath+'p4-11.png'},
        {src:loadingPath+'p4-12.png'},
        {src:loadingPath+'p4-13.png'},
        {src:loadingPath+'p5-1.png'},
        {src:loadingPath+'p5-2.png'},
        {src:loadingPath+'p5-3.png'},
        {src:loadingPath+'p5-4.png'},
        {src:loadingPath+'p5-4-1.png'},
        {src:loadingPath+'p5-4-2.png'},
        {src:loadingPath+'p6-1.png'},
        {src:loadingPath+'p6-2.png'},
        {src:loadingPath+'p6-3.png'},
        {src:loadingPath+'p7-1.png'},
        {src:loadingPath+'p7-3.jpg'},
        {src:loadingPath+'p8-1.png'},
        {src:loadingPath+'p8-3.jpg'},
        {src:loadingPath+'p9-1.png'},
        {src:loadingPath+'p9-3.jpg'},
        {src:loadingPath+'p9-4-1.png'},
        {src:loadingPath+'p9-4-2.png'},
        {src:loadingPath+'p9-5-1.png'},
        {src:loadingPath+'p9-6-1.png'},
        {src:loadingPath+'p10-1.png'},
        {src:loadingPath+'p10-3.jpg'},
        {src:loadingPath+'p11-1.png'},
        {src:loadingPath+'p11-3.jpg'},
        {src:loadingPath+'p12-1.png'},
        {src:loadingPath+'p12-3.jpg'},
        {src:loadingPath+'p13-1.png'},
        {src:loadingPath+'p13-3.jpg'},
        {src:loadingPath+'p14-1.png'},
        {src:loadingPath+'p14-3.jpg'},
        {src:loadingPath+'p15-1.png'},
        {src:loadingPath+'p15-3.jpg'},
        {src:loadingPath+'p16-1.png'},
        {src:loadingPath+'p16-3.jpg'},
        {src:loadingPath+'repeat.png'},
        {src:loadingPath+'y1.png'},
        {src:loadingPath+'y2.png'},
        {src:loadingPath+'y3.png'},
        {src:loadingPath+'y44.png'},
        {src:loadingPath+'y5.png'},
        {src:loadingPath+'y6.png'}
    ];
    var queue = new createjs.LoadQueue(false);
    queue.installPlugin(createjs.Sound);
    queue.on("progress", handleOverallProgress, this);
    queue.on("complete", handleComplete, this);
    queue.loadManifest(manifest);
    //初始化阻止屏幕双击，当有表单页的时候，要关闭阻止事件，否则不能输入文字了，请传入false值，再次运行即可
    initPreventPageDobuleTap(true);
    //loading
    function handleOverallProgress(event){
        loadAnimation.play();
        $('.loadingtxt').text(Math.ceil(event.loaded*100)+"%");
    }
    //加载完成
    function handleComplete() {
        isHandleComplete=true;
        // if (isWritten) {
            $('.loading').remove();
            initPageMotion();
        // }
    }
    //初始化动画
    function initPageMotion(){
        $(".main").fadeIn(500,function(){
        });
    }

    //云动画
    // var YunCome=new TimelineMax();
    // YunCome.add(TweenMax.from('.y4',.8,{x:400,y:500,ease:Power4.easeOut}));
    // YunCome.add(TweenMax.from('.y1',.8,{x:600,ease:Power4.easeOut}),"-=.7");
    // YunCome.add(TweenMax.from('.y2',.8,{x:-600,ease:Power4.easeOut}),"-=.7");
    // YunCome.add(TweenMax.from('.y3',.8,{x:-400,y:500,ease:Power4.easeOut}),"-=.7");
    // YunCome.add(TweenMax.from('.y5',.8,{x:400,y:-500,ease:Power4.easeOut}),"-=.7");
    // YunCome.add(TweenMax.from('.y6',.8,{x:-400,y:-500,ease:Power4.easeOut,onComplete:function() {
    //     currentIndex = $(".flipbook").turn("page")-2;//当前页
    //     if (isStop) {
    //         $('.show').hide();
    //         $('.show'+currentIndex).hide();
    //         $('.long_btn').hide();
    //         $('.Page').show();
    //         $('.yun').hide();
    //     }else{
    //         $('.Page').hide();
    //         $('.show'+currentIndex).show();
    //         $('.long_btn').show();
    //         $('.show').show();
    //         YunGo.restart();
    //     }
        
    // }}),"-=.7");
    // YunCome.pause()

    // var YunGo=new TimelineMax();
    // YunGo.add(TweenMax.to('.y6',.8,{x:-400,y:-500,ease:Power4.easeOut}));
    // YunGo.add(TweenMax.to('.y5',.8,{x:400,y:-500,ease:Power4.easeOut}),"-=.7");
    // YunGo.add(TweenMax.to('.y3',.8,{x:-400,y:500,ease:Power4.easeOut}),"-=.7");
    // YunGo.add(TweenMax.to('.y2',.8,{x:-600,ease:Power4.easeOut}),"-=.7");
    // YunGo.add(TweenMax.to('.y1',.8,{x:600,ease:Power4.easeOut}),"-=.7");
    // YunGo.add(TweenMax.to('.y4',.8,{x:400,y:500,ease:Power4.easeOut,onComplete:function() {
    //     $('.yun').hide();
    //     if(isStop){
    //         $('.show').hide();
    //         $('.show'+currentIndex).hide();
    //         $('.long_btn').hide();
    //         $('.Page').show();
    //         $('.yun').hide();
    //     }
    // }}),"-=.7");
    // YunGo.pause()

    //长按按钮
    var currentIndex=0,timer;
    $("#Page").on('touchstart','.Long-btn',function() {
        isStop=false;
        timer=setTimeout(function() {
           $('.yun').show();
           YunCome.restart();
        },800)
    })
    $("#Page").on('touchend','.Long-btn',function() {
        clearTimeout(timer);
        isStop=true;
        $('.show'+currentIndex).hide();
        $('.long_btn').hide();
        $('.show').hide();
        $('.Page').show();
        $('.yun').hide();
    })

    /*翻书函数*/
    function turnPage(){
        // motionObj["page"+1].restart();
        $('.flipbook').turn({
            //加速模式ture or false。（必须在移动端）
            acceleration:true,
            //Width
            width:533,
            // Height
            height:901,
            // Elevation
            elevation: 50,
            // Enable gradients
            gradients: true,
            // Auto center this flipbook
            autoCenter: false,
            //单屏还是双屏
            display: "single",
            //pages
            pages:14,
            when: {
                turning:function (e,page) {
                     if (page!=0 && page!=1 && page!=2) {
                        $('.p4-16,.p4-17,.Long-btn').show();
                    }else{
                        $('.p4-16,.p4-17,.Long-btn').hide();
                    }
                }
            }
        });
    
    };
    //点击跳转对应页
    for (var i = 4; i < 16; i++) {
        clickPage('.p4-'+i,i-1);
    }
    //上一页
    $("#Page").on('click',".p4-16",function() {
        var pageCount = $(".flipbook").turn("pages");//总页数
        var currentPage = $(".flipbook").turn("page");//当前页
        if (currentPage >= 3) {
            $("#flipbook").turn('page', currentPage - 1);
        } 
    })   
    //返回总目录
    $("#Page").on('click',".p4-17",function() {
        $("#flipbook").turn("page",2)
    })    
    //翻页跳转
    function clickPage(obj,index) {
        $("#flipbook").on('click',obj,function() {
            $("#flipbook").turn("page",index)
            $('.p4-16,.p4-17').show();
        });
    }

    //封面跳转前言
    $('.p2-4').on('click',function() {
        if (First) {
            First=false;
            TweenMax.to('.cover',1,{scale:2,alpha:0,ease:Linear.easeNone})
            $('.book').fadeIn(1000);
            $('.cover').fadeOut(1000);
            turnPage();
        }else{
            TweenMax.to('.cover',1,{scale:2,alpha:0,ease:Linear.easeNone})
            $('.book').fadeIn(1000);
            $('.cover').fadeOut(1000);
        }
        
    })

  
    //关闭巨幕
    $('.close').on('click',function() {
        $('.list1,.list2,.list3,.list4,.close').fadeOut();
    })
    //开启巨幕
    function openBigBg(obj1,obj2) {
        $("#flipbook").on('click',obj1,function() {
        $(obj2+',.close').fadeIn();
    })
    }
    $("#flipbook").on('click','.p5-2',function() {
        $('.list1,.close').fadeIn();
    })
    openBigBg('.p5-2-1,.p5-2-2','.list1')
    openBigBg('.p9-4-1,.p9-4-2','.list2')
    openBigBg('.p9-5-1,.p9-5-2','.list3')
    openBigBg('.p9-6-1,.p9-6-2','.list4')

    //点击翻到封底
    $("#flipbook").on('click','.fanye3',function() {
        // TweenMax.to('.book',1.5,{rotationY:-60,transformOrigin:"0% 100%",alpha:0,ease:Linear.easeNone,onStart:function() {
            $('.Long-btn').hide();
            $('.book,.p4-16,.p4-17').fadeOut(1000,function() {
                $(".flipbook").turn("page",1)
            });
            $('.bg_last,.repeat').fadeIn(1000);
        // }})
    })

     //点击再看一次
    $("#Page").on('click','.repeat',function() {
        $('.bg_last,.repeat').fadeOut();
        TweenMax.to('.cover',0,{scale:1,alpha:1,ease:Linear.easeNone})
        $('.cover').fadeIn();
        console.log($(".flipbook").turn("page"))
    })
    

    //当有表单页的时候，要关闭阻止事件，否则不能输入文字了
    function initPreventPageDobuleTap(isPreventPageDobuleTap){
        // if(isPreventPageDobuleTap){
        //     $('.page').on(touchstart,function(e){
        //         e.preventDefault();
        //     })
        // }else{
        //     $('.page').off(touchstart);
        // }
    }
    //音乐按钮
    $('.musicicon').on(touchstart,function(){
        if($(this).hasClass('musicrotate')){
            sound_1.pause();
            $(this).removeClass('musicrotate');
        }else{
            sound_1.play();
            $(this).addClass('musicrotate');
        }
    })
});