# _javascripts.html.twig

**Path**: `templates\bundles\SyliusUiBundle\_javascripts.html.twig`

## Summary
This Twig template file loads JavaScript assets for the Sylius admin interface and implements a jQuery `addClass` method override to prevent conflicting sidebar visibility transitions. The override specifically blocks the core Sylius code from adding the 'visible' class to the sidebar element (unless explicitly overridden), allowing a custom sidebar persistence module to manage the sidebar state without double transitions or visual glitches.

