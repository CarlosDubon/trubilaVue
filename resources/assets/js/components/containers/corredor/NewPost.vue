<template>
    <div>
        <PostCategory></PostCategory>
        <PostUbication></PostUbication>
        <PostDescription></PostDescription>
    </div>
</template>

<script>
    import PostCategory from "../../forms/PostCategory";
    import PostUbication from "../../forms/PostUbication";
    import PostDescription from "../../forms/PostDescription";
    export default {
          components: {
                'PostCategory': PostCategory,
                'PostUbication': PostUbication,
                'PostDescription': PostDescription,

            }     
    }
</script>
