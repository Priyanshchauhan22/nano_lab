$(document).ready(function() {
    var $loading = $('.loading');
    var $selectMenu = $('.select-menu');
    var $menu = $('#menu');
    var $pages = $('.pages');
    var $allPages = $('.page');
    var menuSize = 20; // vmin
    var halfMenuSize = menuSize / 2;

    // Initial loading animation
    $loading.velocity({
        rotateX: -90
    }, {
        duration: 1000,
        delay: 500,
        complete: function() {
            $loading.css('visibility', 'hidden');
            $selectMenu.css('visibility', 'visible');
            $menu.velocity({
                rotateX: 0,
                rotateY: 0
            }, {
                duration: 1000
            });
        }
    });

    // Menu item click handler
    $('.menu').on('click', function() {
        var page = $(this).data('page');
        var $activePage = $('.page[data-page="' + page + '"]');

        $selectMenu.velocity({
            rotateY: 180
        }, {
            duration: 1000,
            complete: function() {
                $selectMenu.css('visibility', 'hidden');
                $pages.css('visibility', 'visible');
                $allPages.css('visibility', 'hidden');
                $activePage.css('visibility', 'visible');
                
                $pages.velocity({
                     rotateY: 0
                }, {
                    duration: 1000
                });
            }
        });
    });

    // Logic to go back to menu (could be a button inside a page)
    // For simplicity, we'll use the "home" menu item to act as a back button too.
    $('.menu[data-page="home"]').on('click', function(){
        if($pages.css('visibility') === 'visible'){
             $pages.velocity({
                 rotateY: 180
             }, {
                 duration: 1000,
                 complete: function(){
                    $pages.css('visibility', 'hidden');
                    $selectMenu.css('visibility', 'visible');
                    $selectMenu.velocity({
                        rotateY: 0
                    }, {
                        duration: 1000
                    });
                 }
             });
        }
    });
});
