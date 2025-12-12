# show.html.twig

**Path**: `templates\Animal\show.html.twig`

## Summary
This Twig template renders the detail/show page for an individual Animal entity in the Sylius admin panel. It extends the base Sylius admin layout, displays the animal's name in the page title, and triggers a template event (`app.admin.animal.show.content`) that allows other parts of the application to inject content into the animal's display page, following Sylius's event-driven template architecture.

