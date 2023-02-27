<script>
    import ArrowLeft from '$lib/assets/svg/arrow-left.svg';
    import ArrowRight from '$lib/assets/svg/arrow-right.svg';
    import SimpleArrowLeft from '$lib/assets/svg/simple-arrow-left.svg';
    import SimpleArrowRight from '$lib/assets/svg/simple-arrow-right.svg';

    const testimonials = [{
            id: 1,
            name: 'Eliza Wright',
            role: 'Customer',
            testi_title: 'Incredible service',
            testimonial: 'Superior servicetThe technician was kind and supportive, and I would highly suggest him.'
        },
        {
            id: 2,
            name: 'Jake Cartworth',
            role: 'Customer',
            testi_title: 'A supportive and effective service',
            testimonial: 'Efficient and helpful service. Quick problem identification and really welcoming personnel. Regards, folks.'
        },
        {
            id: 3,
            name: 'James Neimann',
            role: 'Customer',
            testi_title: 'Always dependable, sincere, and efficient',
            testimonial: 'They did an excellent job of identifying and resolving a mouse problem that had found its way into the gap between the floors and the ceiling. Catch-it is always a pleasure to work with; they go above and above and are completely trustworthy and open.'
        }
    ];
    let current_testimonial = 0;
    let text = testimonials[0].name;
    let role = testimonials[0].role;
    let testi_title = testimonials[0].testi_title;
    let testimonial = testimonials[0].testimonial;

    function handleForward(e) {
        e.preventDefault();
        current_testimonial++;
        if (current_testimonial >= testimonials.length) {
            current_testimonial = 0;
        }
        text = testimonials[current_testimonial].name;
        role = testimonials[current_testimonial].role;
        testi_title = testimonials[current_testimonial].testi_title;
        testimonial = testimonials[current_testimonial].testimonial;
    }

    function handleBack(e) {
        e.preventDefault();
        current_testimonial--;
        if (current_testimonial < 0) {
            current_testimonial = testimonials.length - 1;
        }
        text = testimonials[current_testimonial].name;
        role = testimonials[current_testimonial].role;
        testi_title = testimonials[current_testimonial].testi_title;
        testimonial = testimonials[current_testimonial].testimonial;
    }
</script>

<section>
    <div style="background-image:url('../images/pest_info_bg.jpg')" class="bg-no-repeat bg-cover bg-center">
        <div class="lg:w-[940px] mx-auto flex flex-col lg:flex-row gap-8 justify-center py-32 items-center">
            <div class="flex items-center">
                <a href="/" class="shrink-0 grow border-0 w-[40px] h-[40px] lg:w-[70px] lg:h-[70px]" on:click={handleForward}>
                    <ArrowLeft class="drop-shadow-sm shadow-xl rounded-full hidden md:block" />
                    <SimpleArrowLeft class="drop-shadow-sm shadow-xl rounded-full bg-white text-base-purple w-[40px] h-[40px] md:hidden" />
                </a>
                <div class="p-8 md:p-16 shrink text-2xl font-light leading-relaxed bg-white rounded-2xl shadow-2xl">
                   <h3 class="h3-elem text-base-purple">{testi_title}</h3>
                   <p class="py-2">{testimonial}</p> 
                </div>
                <a href="/" class="shrink-0 grow border-0 w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] md:ml-4" on:click={handleBack}>
                    <ArrowRight class="drop-shadow-sm shadow-xl rounded-full hidden md:block" />
                    <SimpleArrowRight class="drop-shadow-sm shadow-xl rounded-full bg-white text-base-purple w-[40px] h-[40px] md:hidden" />
                </a>
            </div>
            <!-- TESTIMONIAL NAME -->
            <div class="w-auto shrink-0 bg-white text-base-purple p-3 rounded-xl">
                <h3 class="text-lg font-bold">{text}</h3>
                <small class="font-bold text-gray-600">{role}</small>
            </div>
        </div>
    </div>
</section>