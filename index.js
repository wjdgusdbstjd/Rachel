// // gsap.from(
//         //     ".section-6 ul li:nth-child(2) img",
//         //     {
//         //         y: "30vw", //8vw아래에서 시작
//         //         opacity: 0, //투명인 상태에서 시작
//         //         duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
//         //         ease: "power1.out",
//         //         stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
//         //         scrollTrigger: {
//         //             trigger: ".section-6",   // → trigger 를 h2 로
//         //             start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
//         //             toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
//         //             markers: false //페이지에 스크롤 위치 마커
//         //         }
//         //     }
//         // );

//         gsap.registerPlugin(ScrollTrigger);


//         // ----------------------------------------------------
//         // 1. 페이지 로드 시 헤더 나타나기
//         // ----------------------------------------------------
//         gsap.to(".logo, .line, .main-header, .line-1", {
//             y: 0,
//             opacity: 1,
//             duration: 0.8,
//             ease: "power2.out",
//             delay: 0.5
//         });


//         // ----------------------------------------------------
//         // 2. 헤더 숨기기/보이기 트윈 (충돌 방지 버전)
//         // ----------------------------------------------------
//         const headerHide = gsap.to(".logo, .line, .main-header, .line-1", {
//             y: -100,
//             opacity: 0,
//             duration: 0.3,
//             ease: "power1.inOut",
//             paused: true,
//             immediateRender: false
//         });


//         // ----------------------------------------------------
//         // 3. 헤더 텍스트/라인 색상 변경용 ScrollTrigger
//         // ----------------------------------------------------
//         const ALL_HEADER_CONTENT = "header a, .line, .line-1";
//         const MENU_LINES = ".left-group ul .line, .middle-group ul .line, .right-group ul .line, .line-1";

//         ScrollTrigger.create({
//             start: 100,

//             onEnter: () => {
//                 gsap.to(ALL_HEADER_CONTENT, {
//                     color: "#B650F0",
//                     borderTopColor: "#B650F0",
//                     borderColor: "#B650F0",
//                     duration: 0.3
//                 });

//                 gsap.to(MENU_LINES, {
//                     backgroundColor: "#B650F0",
//                     borderColor: "#B650F0",
//                     duration: 0.3
//                 });
//             },

//             onLeaveBack: () => {
//                 gsap.to(ALL_HEADER_CONTENT, {
//                     color: "#ffffff",
//                     borderTopColor: "#ffffff",
//                     borderColor: "#ffffff",
//                     duration: 0.3
//                 });

//                 gsap.to(MENU_LINES, {
//                     backgroundColor: "#ffffff",
//                     borderColor: "#ffffff",
//                     duration: 0.3
//                 });
//             }
//         });


//         // ----------------------------------------------------
//         // 4. 헤더 숨김 / 표시용 ScrollTrigger (전용으로 분리)
//         // ----------------------------------------------------
//         ScrollTrigger.create({
//             start: 0,
//             end: "max",

//             onUpdate: (self) => {
//                 // 스크롤 다운 → 헤더 숨기기
//                 if (self.direction === 1) {
//                     if (!headerHide.isActive()) headerHide.play();
//                 }
//                 // 스크롤 업 → 헤더 나타내기
//                 else {
//                     if (!headerHide.isActive()) headerHide.reverse();
//                 }
//             },

//             onEnterBack: () => {
//                 if (!headerHide.isActive()) headerHide.reverse();
//             }
//         });



        



        gsap.from(
            ".main img:nth-child(1)",
            {
                x: "-30vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.6,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".main img:nth-child(1)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".main img:nth-child(2)",
            {
                y: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.1,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".main img:nth-child(2)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".main img:nth-child(3)",
            {
                x: "30vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.1,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".main img:nth-child(2)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".main .tag-1, .tag-2, .tag-3",
            {
                y: "10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.1,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".tag-1",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-1 img:nth-child(1)",
            {
                x: "-20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.5, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-1",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-1 img:nth-child(2)",
            {
                x: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.5, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-1 img:nth-child(2)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".section-1 img:nth-child(4)",
            {
                y: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.1,
                ease: "power1.out",
                stagger: 0.5, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-1 img:nth-child(4)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-1 p",
            {
                y: "-20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.5, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-1 p",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-2 img:nth-child(1)",
            {
                y: "-30vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-2 img:nth-child(1)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );



        gsap.from(
            ".section-2 img:nth-child(3)",
            {
                x: "30vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-2 img:nth-child(3)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".section-2 img:nth-child(4)",
            {
                y: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-2 img:nth-child(4)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".section-2 p",
            {
                y: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.2,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-2 p",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-3 ul li:nth-child(1)",
            {
                y: "-30vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-3",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".section-3 ul li:nth-child(2)",
            {
                y: "30vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-3",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".section-4 img:nth-child(1)",
            {
                x: "-30vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.2,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-4 img:nth-child(1)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".section-4 img:nth-child(2)",
            {
                x: "30vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.2,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-4 img:nth-child(1)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-5 .section-5-title",
            {
                x: "-30vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-5-title",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play none none none", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-5-1 .rossand",
            {
                // x: "-30vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-5-1",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-5-sub .section-5-sub-txt",
            {
                y: "14vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-5-sub-txt",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-5-sub p",
            {
                y: "14vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.7,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-5-sub p",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-5-sub .section-5-img-3",
            {
                y: "14vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 1,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-5-sub",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play none none none", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-5-last-txt",
            {
                x: "23vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.5,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-5-last-txt",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );



        gsap.from(
            ".section-6 .section-6-title img:nth-child(1)",
            {
                y: "-23vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.8,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 .section-6-title img:nth-child(1)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-6 .section-6-title img:nth-child(2)",
            {
                y: "23vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.8,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 .section-6-title img:nth-child(1)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-6 .rachel-12-txt",
            {
                x: "16vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.8,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".rachel-12-txt",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play none none none", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-6 .section-6-content ul li:nth-child(2)",
            {
                y: "16vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.5,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6-content ul li:nth-child(2)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-6 .section-6-content ul li:nth-child(3)",
            {
                y: "16vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.8,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6-content ul li:nth-child(3)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".section-6 .section-6-content ul li:nth-child(4)",
            {
                x: "16vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6-content ul li:nth-child(4)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-6 .section-6-content ul li:nth-child(5)",
            {
                x: "-16vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6-content ul li:nth-child(5)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        

        

        


