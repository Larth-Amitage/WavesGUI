(function () {
    'use strict';

    function WavesTabController($scope) {
        $scope.isSelected = function () {
            return $scope.pageId === $scope.currentPageId;
        };

        $scope.onClick = function () {
            $scope.onSelect({pageId: $scope.pageId});
        };
    }

    function WavesTabLink(scope, element) {
        element.addClass('tabs-radio');
    }

    angular
        .module('app.navigation')
        .directive('wavesTab', function WavesTabDirective() {
            return {
                restrict: 'A',
                controller: ['$scope', WavesTabController],
                scope: {
                    pageId: '@',
                    caption: '<',
                    onSelect: '&',
                    currentPageId: '<'
                },
                link: WavesTabLink,
                template: '<img ng-src="img/tabs-iconset-{{pageId}}.svg" class="fFade" alt="{{caption}}" ' +
                    'ng-click="onClick()" ng-class="[{selected: isSelected()}]"/>'
            };
        });
})();
