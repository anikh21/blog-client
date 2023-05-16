import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import '@root/styles/components/breadcrumb.scss';
export default function Breadcrumb({ category }) {
    return (
        <div className="breadcrumb">
            <h2 className="title">{category.title || <Skeleton />}</h2>
            <p>
                Dolor similique vitae. Exercitationem quidem occaecati iusto. Id
                non vitae enim quas error dolor maiores ut. Exercitationem earum
                ut repudiandae optio veritatis animi nulla qui dolores.
            </p>
        </div>
    );
}
