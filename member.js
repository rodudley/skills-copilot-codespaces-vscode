function skillsMember() {
    return {
        restrict: 'E',
        tempalateUrl: "modules/skills/views/member.html",
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }
    };
}